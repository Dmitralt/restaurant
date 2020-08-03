const fs = require("fs");
const request = require("request");
var Jimp = require("jimp");


const original_foulder="./files/original/";
const small_foulder="files/small/"

const jsonfile="result.json"



async function download(url, path, callback, filename) {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on("close", callback);
  });
}
/************************ */

//960-515

async function createThumbnail(source, filename) {
  const destination = small_foulder+"small-" + filename;

  Jimp.read(source + "/" + filename, (err, image) => {
    if (err) throw err;

    var w = image.bitmap.width; //  width of the image
    var h = image.bitmap.height; // height of the image
    let NW;
    let NH;
    console.log(w,h)
    switch(w + "|" + h) {
      case "5197|4280":
        NW=960;
        NH=790;
          break;
      case "4480|6720":
        NW=960;
        NH=1165;
          break;
     default:
       NW=960;
       NH=515;
       console.log("DEFAULT")
          break;
  }







    image.resize(NW, NH).quality(60).write(destination);
  });
}

function _resize(jimp) {
  return jimp.resize(resolution.width, Jimp.AUTO).quality(quality);
}

function _save(destination, jimp) {
  return jimp.writeAsync(destination);
}

async function GetPictures() {
  fs.readFile(jsonfile, "utf8", function (error, data) {
    let obj = JSON.parse(data);
    let count = 0;
    for (let key0 in obj["ua"]) {
      for (let element0 of obj["ua"][key0][Object.keys(obj["ua"][key0])[0]]) {
        for (let element1 of element0[Object.keys(element0)[1]]["catalog"][0][
          "content"
        ]) {
          if (element1["urlimg"].length != 0) {
            for (let element_1_2 of element1["urlimg"]) {

              let element2=  element_1_2["imageUrl"]
              console.log(element2);

              let help = element2.split(".");
              let ext = help[help.length - 1];
              let help2 = element2.split("/")
              let filename=help2[help2.length - 1];
            console.log(filename)
              //console.log(count+"."+ext)

              let url = element2;
             // let path = original_foulder + count + "." + ext;
             let path = original_foulder + filename;
              let name = count + "." + ext;
             
              download(
                url,
                path,
                () => {
                  console.log("✅ Done!" + filename);
                  createThumbnail(original_foulder, filename);
                },
                filename
              );
              count++;
            }
          }
        }
      }
    }
  });
}
GetPictures();
