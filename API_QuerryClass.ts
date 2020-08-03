//var requestify = require('requestify');
var request = require("request")
let moment = require("moment")
const { GoogleSpreadsheet } = require("google-spreadsheet");
const { promisify } = require("util");
const creds = require("./settings/client_secret.json");
const fs = require("fs");
const { title } = require("process");



const exeption = "error"

export class APIRequests {


  private address;

  public curent_marker;
  constructor(address) {

    this.address = address;

  }

  /*public async getmarker(user_id: string, user_secret: string) {
    try {
      let a = await requestify.get(this.address + '/auth/access_token?user_id=' + user_id + '&user_secret=' + user_secret)
      return (a.getBody())
    } catch{ return exeption }
  }*/

  /* public async setcurentmarker(user_id: string, user_secret: string) {
     try {
       let a = await requestify.get(this.address + '/auth/access_token?user_id=' + user_id + '&user_secret=' + user_secret)
       this.curent_marker = a.getBody();
       return "done"
     } catch{ return exeption }
   }*/


  public async setcurentmarker(user_id: string, user_secret: string) {
    try {
      let body = await new Promise(res => request.get(this.address + '/auth/access_token?user_id=' + user_id + '&user_secret=' + user_secret, {}, function (error, response, body) {
        if (error) { } else { res(body); }
      }));
      this.curent_marker = (body + "").toString().replace("\"", "").replace("\"", "")
      return "done"
    } catch{ return exeption }
  }

  //https://iiko.biz:9900/api/0/nomenclature/0beff7b8-8f87-11ea-80f4-d8d38565926f?access_token=X4XMwv6gBmWWUcvatJaKILUs0mEzilxByH8N23FXQMKRhk1Bfv18OA0sH9bsBSqCMORIHQ_Db8HR2zooV2pJ9g2
  // /api/0/nomenclature/{organizationId}?access_token={accessToken}

  //НОМЕНКЛАТУРА

  //0beff7b8-8f87-11ea-80f4-d8d38565926f -organisationid
  public async getnomenclature(organisation_id: string, accessToken: string) {
    try {
      var data = {}
      let body = await new Promise(res => request.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
        if (error) { } else { res(body); }
      }));
      return body
    } catch{ return exeption }
  }

  //Получить стоп-лист по сети ресторанов

  // /api/0/stopLists/getDeliveryStopList?access_token={accessToken}&organization={organizationId}
  /*public async getDeliveryStopList(organisation_id: string, accessToken: string) {
    try {
      let a = await requestify.get(this.address + "/stopLists/getDeliveryStopList?access_token=" + accessToken + "&organization=" + organisation_id)
      return (a.getBody())
    } catch{ return exeption }
  }*/
  public async getDeliveryStopList(organisation_id: string, accessToken: string) {
    try {
      var data = {}
      let body = await new Promise(res => request.get(this.address + "/stopLists/getDeliveryStopList?access_token=" + accessToken + "&organization=" + organisation_id, { json: data, headers: {} }, function (error, response, body) {
        if (error) { } else { res(body); }
      }));
      return body
    } catch{ return exeption }
  }




  public async create_order(accessToken: string, data: object) {
    try {

      let body = await new Promise(res => request.post(this.address + "/orders/add?access_token=" + accessToken + "&request_timeout=0:0:30", { json: data, headers: {} }, function (error, response, body) {
        if (error) { } else { res(body); }
      }));


      return body
    } catch{ return exeption }
  }




  /*public async getgroups(organisation_id: string, accessToken: string) {
    try {
      let a = await requestify.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken)
      return (a.getBody()["groups"])
    } catch{ return exeption }
  }*/
  public async getgroups(organisation_id: string, accessToken: string) {
    try {
      var data = {}
      let body = await new Promise(res => request.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
        if (error) { } else { res(body); }
      }));
      return body["groups"]
    } catch{ return exeption }
  }



  /*public async getproductCategories(organisation_id: string, accessToken: string) {
    try {
      let a = await requestify.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken)
      return (a.getBody()["productCategories"])
    } catch{ return exeption }
  }*/
  public async getproductCategories(organisation_id: string, accessToken: string) {
    try {
      var data = {}
      let body = await new Promise(res => request.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
        if (error) { } else { res(body); }
      }));
      return body["productCategories"]
    } catch{ return exeption }
  }
  /*public async getproducts(organisation_id: string, accessToken: string) {
    try {
      let a = await requestify.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken)
      return (a.getBody()["products"])
    } catch{ return exeption }
  }*/
  public async getproducts(organisation_id: string, accessToken: string) {
    try {
      var data = {}
      let body = await new Promise(res => request.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
        if (error) { } else { res(body); }
      }));
      return body["products"]
    } catch{ return exeption }
  }
  /* public async getrevision(organisation_id: string, accessToken: string) {
     try {
       let a = await requestify.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken)
       return (a.getBody()["revision"])
     } catch{ return exeption }
   }
   */
  public async getrevision(organisation_id: string, accessToken: string) {
    try {
      var data = {}
      let body = await new Promise(res => request.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
        if (error) { } else { res(body); }
      }));
      return body["revision"]
    } catch{ return exeption }
  }
  /* public async getuploadDate(organisation_id: string, accessToken: string) {
     try {
       let a = await requestify.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken)
       return (a.getBody()["uploadDate"])
     } catch{ return exeption }
   }*/
  public async getuploadDate(organisation_id: string, accessToken: string) {
    try {
      var data = {}
      let body = await new Promise(res => request.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
        if (error) { } else { res(body); }
      }));
      return body["uploadDate"]
    } catch{ return exeption }
  }

  ///api/0/cities/cities?access_token={accessToken}&organization={organizationId}
  //города
  /* public async getcities(organisation_id: string, accessToken: string) {
     try {
       let a = await requestify.get(this.address + "/cities/cities?access_token=" + accessToken + "&organization=" + organisation_id)
       return (a.getBody())
     } catch{ return exeption }
   }
   public async getcitiesoforganisation(organisation_id: string, accessToken: string) {
     try {
       let a = await requestify.get(this.address + "/cities/citiesList?access_token=" + accessToken + "&organization=" + organisation_id)
       return (a.getBody())
     } catch{ return exeption }
   }*/
  ///api/0/streets/streets?access_token={accessToken}&organization={organizationId}&city={cityId}

  //улицы
  /*public async getstreets(organisation_id: string, accessToken: string, cityId: string) {
    try {
      let a = await requestify.get(this.address + "/streets/streets?access_token=" + accessToken + "&organization=" + organisation_id + "&city=" + cityId)
      return (a.getBody())
    } catch{ return exeption }
  }*/
  ///api/0/regions/regions?access_token={accessToken}&organization={organizationId}
  //регионы
  /* public async getregions(organisation_id: string, accessToken: string) {
     try {
       let a = await requestify.get(this.address + "/regions/regions?access_token=" + accessToken + "&organization=" + organisation_id)
       return (a.getBody())
     } catch{ return exeption }
   }
 */

  // /api/0/orders/deliveryHistoryByPhone?access_token={accessToken}&organization={organizationId}&phone={phoneNumber}
  //История доставочных заказов по номеру телефона
  /*public async getdeliveryHistoryByPhone(organisation_id: string, accessToken: string, phoneNumber: string) {
    try {
      let a = await requestify.get(this.address + "/orders/deliveryHistoryByPhone?access_token=" + accessToken + "&organization=" + organisation_id + "&phone=" + phoneNumber)
      return (a.getBody())
    } catch{ return exeption }
  }*/


  // /api/0/orders/get_courier_orders?access_token={accessToken}&organization={organizationId}&courier={courierId}&request_timeout={requestTimeout}
  //Получить все заказы курьера
  /*
    public async getget_courier_orders(organisation_id: string, accessToken: string, courierId: string, requestTimeout: string) {
      try {
        let a = await requestify.get(this.address + "/orders/get_courier_orders?access_token=" + accessToken + "&organization" + organisation_id + "&courier=" + courierId + "&request_timeout=" + requestTimeout)
        return (a.getBody())
      } catch{ return exeption }
    }*/

  // /api/0/notices/notices?access_token={accessToken}&request_timeout={requestTimeout}

  // Получить данные журнала событий
  /*public async getnotices(accessToken: string, requestTimeout: string, NoticesRequest: Object) {//FIXME:
    try {
      let a = await requestify.get(this.address + "/notices/notices?access_token=" + accessToken + "&request_timeout=" + requestTimeout)
      return (a.getBody())
    } catch{ return exeption }
  }
*/
  /*
  NoticesRequest=
  {
      "organizationId": "{organizationId}",
      "notices":
      {
    \"notices\":
  [
      {
        \"id\":\"3FA41F7B-449B-41CF-91C8-CC46EAFA4E63\",
        \"importance\":2,
        \"message\":\"Продажи упали\",
        \"type\":0,
        \"date\":\"2015-04-07T16:00:00.000\",
        \"dateCreated\":\"2015-04-07T16:05:00.000\"
      },
      {
        \"id\":\"015548E1-C67B-43F8-B131-8C3A1FB719D4\",
        \"importance\":0,
        \"message\":\"Шеф, всё пропало\",
  \"type\":1,
    \"date\":\"2015-04-07T16:03:00.000\",
    \"dateCreated\":\"2015-04-07T16:15:00.000\"
  }
  ]
      }
  }
  
  где
  importance - важность (2, 1, 0, -1, -2)
  message - сообщение
  type -тип уведомления (0 - OLAP, 1 - EVENT)
  date - дата события (отмена пречека или время почасовой выручки)
  dateCreated - дата создания уведомления
  
  
  
  
  */



  // /api/0/rmsSettings/getRoles?access_token={accessToken}&organization={organizationId}
  //Получение списка ролей организации
  /*public async getRoles(organisation_id: string, accessToken: string) {
    try {
      let a = await requestify.get(this.address + "/rmsSettings/getRoles?access_token=" + accessToken + "&organization=" + organisation_id)
      return (a.getBody())
    } catch{ return exeption }
  }
*/
  //Получение списка сотрудников организации
  // /api/0/rmsSettings/getEmployees?access_token={accessToken}&organization={organizationId}
  /*public async getEmployees(organisation_id: string, accessToken: string) {
    try {
      let a = await requestify.get(this.address + "/rmsSettings/getEmployees?access_token=" + accessToken + "&organization=" + organisation_id)
      return (a.getBody())
    } catch{ return exeption }
  } */
  //Получение списка залов организации
  // /api/0/rmsSettings/getRestaurantSections?access_token=ТОКЕН&organization=ОРГАНИЗАЦИЯ
  /*public async getRestaurantSections(organisation_id: string, accessToken: string) {
    try {
      let a = await requestify.get(this.address + "/rmsSettings/getRestaurantSections?access_token=" + accessToken + "&organization=" + organisation_id)
      return (a.getBody())
    } catch{ return exeption }
  }
  */
  //Получение списка допустимых типов заказов
  ///api/0/rmsSettings/getOrderTypes?access_token={accessToken}&organization={organizationId}



  /*public async getOrderTypes(organisation_id: string, accessToken: string) {
    try {
      let a = await requestify.get(this.address + "/rmsSettings/getOrderTypes?access_token=" + accessToken + "&organization=" + organisation_id)
      return (a.getBody())
    } catch{ return exeption }
  }*/
  //Получить список типов оплат

  ///api/0/rmsSettings/getPaymentTypes?access_token={accessToken}&organization={organizationId}
  /*public async getPaymentTypes(organisation_id: string, accessToken: string) {
    try {
      let a = await requestify.get(this.address + "/rmsSettings/getPaymentTypes?access_token=" + accessToken + "&organization=" + organisation_id)
      return (a.getBody())
    } catch{ return exeption }
  }*/
  //Получить список маркетинговых источников
  // /api/0/rmsSettings/getMarketingSources?access_token={accessToken}&organization={organizationId}
  /*public async getMarketingSources(organisation_id: string, accessToken: string) {
    try {
      let a = await requestify.get(this.address + "/rmsSettings/getMarketingSources?access_token=" + accessToken + "&organization=" + organisation_id)
      return (a.getBody())
    } catch{ return exeption }
  }*/
  //Получить список курьеров организации
  ///api/0/rmsSettings/getCouriers?access_token={accessToken}&organization={organizationId}
  /*public async getCouriers(organisation_id: string, accessToken: string) {
    try {
      let a = await requestify.get(this.address + "/rmsSettings/getCouriers?access_token=" + accessToken + "&organization=" + organisation_id)
      return (a.getBody())
    } catch{ return exeption }
  }*/
  //Получить стоп-лист по сети ресторанов

  // /api/0/stopLists/getDeliveryStopList?access_token={accessToken}&organization={organizationId}
  /*public async getDeliveryStopList(organisation_id: string, accessToken: string) {
    try {
      let a = await requestify.get(this.address + "/stopLists/getDeliveryStopList?access_token=" + accessToken + "&organization=" + organisation_id)
      return (a.getBody())
    } catch{ return exeption }
  }*/
  //Получить список скидок, доступных для применения в доставке для заданного ресторана
  // /api/0/deliverySettings/deliveryDiscounts?access_token={accessToken}&organization={organizationId}
  /*public async getdeliveryDiscounts(organisation_id: string, accessToken: string) {
    try {
      let a = await requestify.get(this.address + "/deliverySettings/deliveryDiscounts?access_token=" + accessToken + "&organization=" + organisation_id)
      return (a.getBody())
    } catch{ return exeption }
  }*/
  //Получить информацию о колонках олап-отчета
  // /api/0/olaps/olapColumns?access_token={accessToken}&request_timeout={requestTimeout}&organizationId={organizationId}&reportType={reportType}
  /*public async getolapColumns(organisation_id: string, accessToken: string, requestTimeout: string, reportType: string) {
    try {
      let a = await requestify.get(this.address + "/olaps/olapColumns?access_token=" + accessToken + "&request_timeout=" + requestTimeout + "&organizationId=" + organisation_id + "&reportType=" + reportType)
      return (a.getBody())
    } catch{ return exeption }
  }
  */
  //Получить олап-отчет
  // /api/0/olaps/olap?access_token={accessToken}&request_timeout={requestTimeout}
  /*public async getolap(accessToken: string, requestTimeout: string) {//:FIXME: POST REQUEST
    try {
      let a = await requestify.post(this.address + "/olaps/olap?access_token=" + accessToken + "&request_timeout=" + requestTimeout)
      return (a.getBody())
    } catch{ return exeption }
  }*/

  //Получить виды преднастроенных олап-отчетов
  ///api/0/olaps/olapPresets?access_token={accessToken}&request_timeout={requestTimeout}&organizationId={organizationId}
  /*public async getolapPresets(organisation_id: string, accessToken: string, requestTimeout: string) {
    try {
      let a = await requestify.get(this.address + "/olaps/olapPresets?access_token=" + accessToken + "&request_timeout=" + requestTimeout + "&organizationId=" + organisation_id)
      return (a.getBody())
    } catch{ return exeption }
  }*/

  public async parser(nomenclature: any) {
    let answer: any = {}
    answer["ua"] = []
    let ancientgroup = {}
    let parentGroup = {}


    for (let key in nomenclature["groups"]) {

      //console.log(nomenclature["groups"][key]["parentGroup"])
      if (nomenclature["groups"][key]["parentGroup"] == null) {
        let groupname: string = (nomenclature["groups"][key]["name"] + "").toString()

        let menuposition = null;
        if (nomenclature["groups"][key]["tags"] != null) {
          let tags = nomenclature["groups"][key]["tags"][0].split(" $ ")

          for (let element of tags) {
            if (element.split("=")[0] == 'menuposition') {
              menuposition = element.split("=")[1]
            }
          }
        }





        if (groupname == "Бар" ||
          groupname == "Вино" ||
          groupname == "Їжа") {
          let pushobj = {};
          pushobj[groupname] = []
          answer["ua"].push(pushobj)
          ancientgroup[nomenclature["groups"][key]["id"]] = { "name": nomenclature["groups"][key]["name"], "menuposition": parseInt(menuposition) }
        }
      }
    }

    for (let key in nomenclature["groups"]) {

      if (nomenclature["groups"][key]["parentGroup"] != null) {
        // console.log(nomenclature["groups"][key]["parentGroup"],ancientgroup[nomenclature["groups"][key]["parentGroup"]])
        let maingroup = ancientgroup[nomenclature["groups"][key]["parentGroup"]]["name"];




        if (maingroup != 'Вино') {

          let name = nomenclature["groups"][key]["name"]
          let parentid = nomenclature["groups"][key]["parentGroup"]
          let id = nomenclature["groups"][key]["id"]

          let grouptype = "catalogFood"
          if (maingroup == 'Бар') {
            grouptype = "list"
          }


          let groupposition = null;
          if (nomenclature["groups"][key]["tags"] != null) {
            let tags = nomenclature["groups"][key]["tags"][0].split(" $ ")

            for (let element of tags) {
              if (element.split("=")[0] == 'groupposition') {
                groupposition = element.split("=")[1]
              }
            }
          }

          parentGroup[id] = { name: name, parentid: parentid, groupposition: groupposition };
          let pushableobj = {}
          pushableobj["id"] = nomenclature["groups"][key]["id"]
          pushableobj[name] = {
            catalog: [{
              name: name,
              description: nomenclature["groups"][key]["description"],
              type: grouptype,
              content: []
            }]
          }

          for (let key1 in answer["ua"]) {
            for (let key2 in answer["ua"][key1]) {
              if (key2 == maingroup) {

                // console.log(key2)

                answer["ua"][key1][key2].push(pushableobj)
              }

            }
          }

          /*  answer["ua"][0][maingroup].push(pushableobj)*/
        }
        else {
          let pushableobj: any = {}
          let name = nomenclature["groups"][key]["name"]
          let parentid = nomenclature["groups"][key]["parentGroup"]
          let id = nomenclature["groups"][key]["id"]
          parentGroup[id] = { name: name, parentid: parentid };
          pushableobj["id"] = nomenclature["groups"][key]["id"]

          pushableobj[name] = {
            catalog: [{
              name: "WINE BY THE GLASS",
              description: nomenclature["groups"][key]["description"],
              type: "list",
              content: []
            }, {
              name: "WINE BY THE BOTTLE",
              description: nomenclature["groups"][key]["description"],
              type: "list",
              content: []
            }]
          }

          for (let key1 in answer["ua"]) {
            for (let key2 in answer["ua"][key1]) {
              if (key2 == maingroup) {

                // console.log(key2)

                answer["ua"][key1][key2].push(pushableobj)
              }

            }
          }
        }

      }
      else {
        //console.log("--------------------------Вино--------------------------")
        //console.log(nomenclature["groups"][key])
        //console.log("--------------------------------------------------------")
      }
    }

    for (let key1 in nomenclature["products"]) {
      let ancientgroupkey;//бар, меню, вино....

      if (nomenclature["products"][key1]["parentGroup"] != null && parentGroup[nomenclature["products"][key1]["parentGroup"]] != null) {

        //console.log("подгрупа",parentGroup[nomenclature["products"][key1]["parentGroup"]],nomenclature["products"][key1]["parentGroup"])


        ancientgroupkey = ancientgroup[parentGroup[nomenclature["products"][key1]["parentGroup"]]["parentid"]]["name"]
        //console.log(ancientgroupkey)
        let productname = parentGroup[nomenclature["products"][key1]["parentGroup"]]["name"]
        //console.log("группа",ancientgroupkey)
        //console.log("---------------")
        for (let key01 in answer["ua"]) {
          for (let key02 in answer["ua"][key01]) {

            if (key02 == ancientgroupkey) {
              // console.log( answer["ua"][key01][key02])

              for (let key03 in answer["ua"][key01][key02]) {

                if (answer["ua"][key01][key02][key03]["id"] == nomenclature["products"][key1]["parentGroup"]) {


                  let imgarr = [];
                  let urlimgarr = []

                  for (let element of nomenclature["products"][key1]["images"]) {

                    let pushableimg = element["imageUrl"].split("/")

                    imgarr.push("files/small/small-" + pushableimg[pushableimg.length - 1])

                    urlimgarr.push({ "imageUrl": element["imageUrl"], "uploadDate": element["uploadDate"] })
                  }



                  let pricefrom = false

                  if (nomenclature["products"][key1]["tags"] != null) {
                    let tags = nomenclature["products"][key1]["tags"][0].split(" $ ")



                    for (let element of tags) {

                      if (element.split("=")[0] == 'pricefrom') {

                        if (element.split("=")[1] == "true") {
                          pricefrom = true


                        }

                      }
                    }
                  }

                  let pushedproduct = {
                    id: nomenclature["products"][key1]["id"],
                    name: nomenclature["products"][key1]["name"],
                    description: nomenclature["products"][key1]["description"],
                    price: nomenclature["products"][key1]["price"],
                    img: imgarr,
                    urlimg: urlimgarr,
                    pricefrom: pricefrom

                  }
                  if (key02 != "Вино") {
                    if (typeof nomenclature["products"][key1]["price"] == "number") {
                      answer["ua"][key01][key02][key03][productname]["catalog"][0]["content"].push(pushedproduct)
                      //console.log(pushedproduct)

                    }
                  }
                  else {
                    //   0-Побутылочно
                    // 1-побокально
                    let Glassorbottle = -1;

                    if (nomenclature["products"][key1]["tags"] != null) {
                      let tags = nomenclature["products"][key1]["tags"][0].split(" $ ")



                      for (let element of tags) {

                        if (element.split("=")[0] == 'listgroup') {

                          if (element.split("=")[1] == "glass") {
                            Glassorbottle = 0


                          }
                          if (element.split("=")[1] == "botlle") {
                            Glassorbottle = 1;

                          }
                        }
                      }
                      if (typeof nomenclature["products"][key1]["price"] == "number" && Glassorbottle != -1) {
                        answer["ua"][key01][key02][key03][productname]["catalog"][Glassorbottle]["content"].push(pushedproduct)
                        //console.log(pushedproduct)

                      }
                    }


                  }

                  //console.log( answer["ua"][key01][key02][key03][productname]["catalog"][0]["content"])

                }


              }




            }

          }

        }





      }

      else {

      }

    }



    for (let key0 = 0; key0 < answer["ua"].length; key0++) {
      for (let key1 = 0; key1 < answer["ua"][key0][Object.keys(answer["ua"][key0])[0]].length; key1++) {

        let element = answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1][Object.keys(answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1])[1]]["catalog"];
        for (let key2 = 0; key2 < element.length; key2++) {

          if (element[key2]["content"].length == 0) {

            if (key2 != 0) {
              element = element.splice(key2, 1)
              key2 = -1;
            }
            else {

              element = []
            }
          }
        }

      }
    }
    for (let key0 = 0; key0 < answer["ua"].length; key0++) {
      for (let key1 = 0; key1 < answer["ua"][key0][Object.keys(answer["ua"][key0])[0]].length; key1++) {
        let element = answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1][Object.keys(answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1])[1]]["catalog"];

        if (element.length == 0) {



          if (key1 != 0) {


            answer["ua"][key0][Object.keys(answer["ua"][key0])[0]].splice(key1, 1)
            key1 = -1
          }
          else {
            answer["ua"][key0][Object.keys(answer["ua"][key0])[0]] = []
          }

        }

      }
    }

    /*  for (let key0 = 0; key0 < answer["ua"].length; key0++) {
  
        for (let key1 = 0; key1 < answer["ua"][key0][Object.keys(answer["ua"][key0])[0]].length; key1++) {
          //console.log( answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1])
          //console.log(answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1])
          // console.log( answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1][Object.keys(answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1])[1]]["catalog"])
  
          let element = answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1][Object.keys(answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1])[1]]["catalog"];
  
  
          for (let key2 = 0; key2 < element.length; key2++) {
           
            //console.log(element[key2])
            if (element[key2]["content"].length == 0) {
              if (key2 != 0) {
                element = element.splice(key2, 1)
                key2 = -1;
              }
              else {
  
                element = []
              }
            }
  
          }
          answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1][Object.keys(answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1])[1]]["catalog"] = element
  
  
  
          if (answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1][Object.keys(answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1])[1]]["catalog"].length == 0) {
  
            
  
            if (key1 != 0) {
  
             
              answer["ua"][key0][Object.keys(answer["ua"][key0])[0]].splice(key1, 1)
              key1 = -1
            }
            else {
              answer["ua"][key0][Object.keys(answer["ua"][key0])[0]] = []
            }
          }
  
        }
      }
  */
    // console.log("------------------------------------------------------------")




    let positionARR = {};

    for (let key in ancientgroup) {

      positionARR[ancientgroup[key]["name"]] = ancientgroup[key]["menuposition"]
    }






    for (let key = 1; key < answer["ua"].length; key++) {


      if (positionARR[Object.keys(answer["ua"][key])[0]] < positionARR[Object.keys(answer["ua"][key - 1])[0]]) {

        let help = answer["ua"][key];
        answer["ua"][key] = {}

        answer["ua"][key] = answer["ua"][key - 1]

        answer["ua"][key - 1] = help
        key = 0
      }

    }

    //console.log("------------------------------------------------------")

    positionARR = {};

    for (let key in parentGroup) {

      positionARR[parentGroup[key]["name"]] = parentGroup[key]["groupposition"]
    }
    //   console.log(positionARR)
    //  console.log("------------------------------------------------------")
    for (let key0 in answer["ua"]) {

      // console.log("+++++++++++++++++++++++++++")
      let keyname = Object.keys(answer["ua"][key0])[0]

      for (let key = 1; key < answer["ua"][key0][keyname].length; key++) {



        if (parseInt(positionARR[Object.keys(answer["ua"][key0][keyname][key])[1]]) < parseInt(positionARR[Object.keys(answer["ua"][key0][keyname][key - 1])[1]])) {

          // console.log( answer["ua"][key0][keyname][key])

          let help = answer["ua"][key0][keyname][key];
          answer["ua"][key0][keyname][key] = {}

          answer["ua"][key0][keyname][key] = answer["ua"][key0][keyname][key - 1]

          answer["ua"][key0][keyname][key - 1] = help
          key = 0
        }

        /* if (positionARR[Object.keys(answer["ua"][key])[0]] < positionARR[Object.keys(answer["ua"][key - 1])[0]]) {

     let help = answer["ua"][key];
     answer["ua"][key] = {}

     answer["ua"][key] = answer["ua"][key - 1]

     answer["ua"][key - 1] = help
     key = 0
   }*/

      }
    }

    /*
    
        console.log("------------------------------------------------------")
        console.log(answer["ua"][1]['Вино'])
    
        console.log("------------------------------------------------------")
        for (let key in parentGroup) {
    
          console.log(parentGroup[key]["name"], parentGroup[key]["groupposition"])
    
        }
        console.log("------------------------------------------------------")*/
    return answer

  }
  public async CoreJSONcreator(nomenclature: any, corefilename: string) {

    let answer = {}




    for (let key0 in nomenclature["groups"]) {
      if (nomenclature["groups"][key0]["parentGroup"] == null) {


        if (nomenclature["groups"][key0]["name"] == "Бар" ||
          nomenclature["groups"][key0]["name"] == "Вино" ||
          nomenclature["groups"][key0]["name"] == "Їжа") {


          let new_nameRU, new_nameENG;

          if (nomenclature["groups"][key0]["name"] == "Бар") {

            new_nameRU = "Бар"
            new_nameENG = "Bar"
          }
          if (nomenclature["groups"][key0]["name"] == "Вино") {

            new_nameRU = "Вино"
            new_nameENG = "Wine"
          }
          if (nomenclature["groups"][key0]["name"] == "Їжа") {

            new_nameRU = "Еда"
            new_nameENG = "Food"
          }





          let tags = {}

          for (let element of nomenclature["groups"][key0]["tags"][0].split(" $ ")) {
            tags[element.split("=")[0]] = element.split("=")[1]
          }
          let newobj = {
            "id": nomenclature["groups"][key0]["id"],
            "nameUA": nomenclature["groups"][key0]["name"],
            "nameRU": new_nameRU,
            "nameENG": new_nameENG,
            "descriptionUA": nomenclature["groups"][key0]["description"],
            "descriptionRU": "",
            "descriptionENG": "",
            "tags": tags,
            "categories": {}
          }
          answer[nomenclature["groups"][key0]["id"]] = newobj
        }
      }

    }
    for (let key0 in nomenclature["groups"]) {
      if (nomenclature["groups"][key0]["parentGroup"] != null) {
        //array.hasOwnProperty("имя поля")



        if (answer.hasOwnProperty(nomenclature["groups"][key0]["parentGroup"])) {



          let tags = {}

          for (let element of nomenclature["groups"][key0]["tags"][0].split(" $ ")) {
            tags[element.split("=")[0]] = element.split("=")[1]
          }

          //console.log(answer[nomenclature["groups"][key0]["parentGroup"]]["nameUA"])

          let categories = [];
          //"Бар"  "Вино" "Їжа"
          if (answer[nomenclature["groups"][key0]["parentGroup"]]["nameUA"] == "Їжа") {
            categories = [{
              "nameUA": nomenclature["groups"][key0]["name"],
              "nameRU": "",
              "nameENG": "",
              "descriptionUA": nomenclature["groups"][key0]["description"],
              "descriptionRU": "",
              "descriptionENG": "",
              "type": "catalogFood",
              "content": {}
            }]
          }
          if (answer[nomenclature["groups"][key0]["parentGroup"]]["nameUA"] == "Бар") {
            categories = [{
              "nameUA": nomenclature["groups"][key0]["name"],
              "nameRU": "",
              "nameENG": "",
              "descriptionUA": nomenclature["groups"][key0]["description"],
              "descriptionRU": "",
              "descriptionENG": "",
              "type": "list",
              "content": {}
            }]
          }
          if (answer[nomenclature["groups"][key0]["parentGroup"]]["nameUA"] == "Вино") {

            categories = [{
              "nameUA": "WINE BY THE GLASS",
              "nameRU": "",
              "nameENG": "",
              "descriptionUA": nomenclature["groups"][key0]["description"],
              "descriptionRU": "",
              "descriptionENG": "",
              "type": "list",
              "content": {}
            }, {
              "nameUA": "WINE BY THE BOTTLE",
              "nameRU": "",
              "nameENG": "",
              "descriptionUA": nomenclature["groups"][key0]["description"],
              "descriptionRU": "",
              "descriptionENG": "",
              "type": "list",
              "content": {}
            }]

          }

          let newobj = {
            "id": nomenclature["groups"][key0]["id"],
            "nameUA": nomenclature["groups"][key0]["name"],
            "nameRU": "",
            "nameENG": "",
            "descriptionUA": nomenclature["groups"][key0]["description"],
            "descriptionRU": "",
            "descriptionENG": "",
            "tags": tags,
            "images": nomenclature["groups"][key0]["images"],
            "order": nomenclature["groups"][key0]["images"],
            "categories": categories
          }


          answer[nomenclature["groups"][key0]["parentGroup"]]["categories"][nomenclature["groups"][key0]["id"]] = newobj
        }
        else {

        }

      }
    }


    //nomenclature["products"]

    for (let product of nomenclature["products"]) {

      let imgarr = [];
      let urlimgarr = []

      if (product["images"] != null) {
        for (let element of product["images"]) {
          let pushableimg = element["imageUrl"].split("/")
          imgarr.push("files/small/small-" + pushableimg[pushableimg.length - 1])
          urlimgarr.push({ "imageUrl": element["imageUrl"], "uploadDate": element["uploadDate"] })
        }
      }




      let pricefrom = false

      if (product["tags"] != null) {
        let tags = product["tags"][0].split(" $ ")



        for (let element of tags) {

          if (element.split("=")[0] == 'pricefrom') {

            if (element.split("=")[1] == "true") {
              pricefrom = true


            }

          }
        }
      }
      let tags = {}
      if (product["tags"] != null) {
        for (let element of product["tags"][0].split(" $ ")) {
          tags[element.split("=")[0]] = element.split("=")[1]
        }
      }
      let pushedproduct = {
        id: product["id"],
        nameUA: product["name"],
        descriptionUA: product["description"],
        nameRU: "",
        descriptionRU: "",
        nameENG: "",
        descriptionENG: "",
        price: product["price"],
        tags: tags,
        img: imgarr,
        urlimg: urlimgarr,
        pricefrom: pricefrom

      }

      // console.log(pushedproduct)
      // console.log(product["groupId"])
      // console.log(product)
      // console.log("++++++++++++++++++++++++++++++++++++++++++++")

      for (let key0 in answer) {
        for (let key1 in answer[key0]["categories"]) {
          if (key1 == product["parentGroup"]) {
            //Сюда запихивать

            if (answer[key0]["nameUA"] != "Вино") {

              // console.log(answer[key0]["categories"][key1]["categories"][0]["content"])

              //answer[key0]["categories"][key1]["categories"][0]["content"].push(pushedproduct)
              answer[key0]["categories"][key1]["categories"][0]["content"][pushedproduct["id"]] = (pushedproduct)
            }
            else {



              if (pushedproduct["tags"]["listgroup"] == "glass") {
                //console.log("TO GLASS")
                // answer[key0]["categories"][key1]["categories"][0]["content"].push(pushedproduct)
                answer[key0]["categories"][key1]["categories"][0]["content"][pushedproduct["id"]] = (pushedproduct)
              }
              if (pushedproduct["tags"]["listgroup"] == "botlle") {
                //console.log("TO BOTTLE")
                // answer[key0]["categories"][key1]["categories"][1]["content"].push(pushedproduct)
                answer[key0]["categories"][key1]["categories"][1]["content"][pushedproduct["id"]] = (pushedproduct)
              }
            }
          }
        }

      }

      //console.log("-------------------------------------------")

    }
    fs.writeFileSync(corefilename, JSON.stringify(answer));
  }



  public async CreateTable(corefilename) {
    const doc = new GoogleSpreadsheet(
      "1ntYkciirfVkgG2OjIcwBGDwfNfHLlqN2QcX9WVOhGpE"
    );
    await doc.useServiceAccountAuth(creds);
    const info = await doc.loadInfo(); // loads document properties and worksheets

    //await doc.sheetsByIndex[0].clear()
    let count = await doc.sheetCount;

    await doc.sheetsByIndex[0].clear();
    await doc.sheetsByIndex[0].updateProperties({ title: "del" });
    for (let i = count; i > 1; i--) {
      await doc.sheetsByIndex[i - 1].delete();
    }

    await doc.addSheet({
      title: "продукты",
      headerValues: [
        "id",
        "nameUA",
        "nameRU",
        "nameENG",
        "descriptionUA",
        "descriptionRU",
        "descriptionENG",
      ],
    });
    await doc.addSheet({
      title: "категории",
      headerValues: [
        "id",
        "nameUA",
        "nameRU",
        "nameENG",
        "descriptionUA",
        "descriptionRU",
        "descriptionENG",
      ],
    });
    await doc.sheetsByIndex[0].delete();

    //console.log( doc.sheetsByIndex[0].a1SheetName)
    const productssheet = doc.sheetsByIndex[0];
    const categoriessheet = doc.sheetsByIndex[1];

    let rawdata = fs.readFileSync(corefilename);
    let menu = JSON.parse(rawdata);

    for (let key0 in menu) {
      for (let key1 in menu[key0]["categories"]) {
        await this.timer(2000);
        await categoriessheet.addRow({
          id: menu[key0]["categories"][key1]["id"],
          nameUA: menu[key0]["categories"][key1]["nameUA"],
          nameRU: menu[key0]["categories"][key1]["nameRU"],
          nameENG: menu[key0]["categories"][key1]["nameENG"],
          descriptoionUA: menu[key0]["categories"][key1]["descriptionUA"],
          descriptoionRU: menu[key0]["categories"][key1]["descriptionRU"],
          descriptoionENG: menu[key0]["categories"][key1]["descriptionENG"],
        });

        for (let productcategories of menu[key0]["categories"][key1][
          "categories"
        ]) {
          for (let productkey in productcategories["content"]) {
            await this.timer(2000);


            const newRow = await productssheet.addRow({
              nameUA: productcategories["content"][productkey]["nameUA"],
              nameRU: productcategories["content"][productkey]["nameRU"],
              nameENG: productcategories["content"][productkey]["nameENG"],
              id: productcategories["content"][productkey]["id"],
              descriptionUA:
                productcategories["content"][productkey]["descriptionUA"],
              descriptionRU:
                productcategories["content"][productkey]["descriptionRU"],
              descriptionENG:
                productcategories["content"][productkey]["descriptionENG"],
            });
          }
        }
      }
    }
  }

  public async LoadFromTable(corefilename) {
    const doc = new GoogleSpreadsheet(
      "1ntYkciirfVkgG2OjIcwBGDwfNfHLlqN2QcX9WVOhGpE"
    );
    await doc.useServiceAccountAuth(creds);
    const info = await doc.loadInfo(); // loads document properties and worksheets

    const productssheet = doc.sheetsByIndex[0];
    const categoriessheet = doc.sheetsByIndex[1];
    let rawdata = fs.readFileSync(corefilename);
    let menu = JSON.parse(rawdata);

    let productROWS = await await productssheet.getRows();
    let categoriesROWS = await await categoriessheet.getRows();

    for (let key in productROWS) {
      // console.log(ROWS[key]["id"])
    }

    for (let key0 in menu) {
      for (let key1 in menu[key0]["categories"]) {
        for (let key in categoriesROWS) {
          if (menu[key0]["categories"][key1]["id"] == categoriesROWS[key]["id"]) {
            menu[key0]["categories"][key1]["id"] = categoriesROWS[key]["id"];
            menu[key0]["categories"][key1]["nameUA"] =
              categoriesROWS[key]["nameUA"];
            menu[key0]["categories"][key1]["nameRU"] =
              categoriesROWS[key]["nameRU"];
            menu[key0]["categories"][key1]["nameENG"] =
              categoriesROWS[key]["nameENG"];
            menu[key0]["categories"][key1]["descriptionUA"] =
              categoriesROWS[key]["descriptionUA"];
            menu[key0]["categories"][key1]["descriptionRU"] =
              categoriesROWS[key]["descriptionRU"];
            menu[key0]["categories"][key1]["descriptionENG"] =
              categoriesROWS[key]["descriptionENG"];

            for (let categorieskey in menu[key0]["categories"][key1][
              "categories"
            ]) {
              if (menu[key0]["nameUA"] != "Вино") {
                menu[key0]["categories"][key1]["categories"][categorieskey][
                  "id"
                ] = categoriesROWS[key]["id"];
                menu[key0]["categories"][key1]["categories"][categorieskey][
                  "nameUA"
                ] = categoriesROWS[key]["nameUA"];
                menu[key0]["categories"][key1]["categories"][categorieskey][
                  "nameRU"
                ] = categoriesROWS[key]["nameRU"];
                menu[key0]["categories"][key1]["categories"][categorieskey][
                  "nameENG"
                ] = categoriesROWS[key]["nameENG"];
                menu[key0]["categories"][key1]["categories"][categorieskey][
                  "descriptionUA"
                ] = categoriesROWS[key]["descriptionUA"];
                menu[key0]["categories"][key1]["categories"][categorieskey][
                  "descriptionRU"
                ] = categoriesROWS[key]["descriptionRU"];
                menu[key0]["categories"][key1]["categories"][categorieskey][
                  "descriptionENG"
                ] = categoriesROWS[key]["descriptionENG"];
              }
              //console.log(menu[key0]["categories"][key1]["categories"][categorieskey])

              /*menu[key0]["categories"][key1]["categories"][categorieskey]["id"]=categoriesROWS[key]["id"]
              menu[key0]["categories"][key1]["categories"][categorieskey]["nameUA"]=categoriesROWS[key]["nameUA"]
              menu[key0]["categories"][key1]["categories"][categorieskey]["nameRU"]=categoriesROWS[key]["nameRU"]
              menu[key0]["categories"][key1]["categories"][categorieskey]["nameENG"]=categoriesROWS[key]["nameENG"]
              menu[key0]["categories"][key1]["categories"][categorieskey]["descriptionUA"]=categoriesROWS[key]["descriptionUA"]
              menu[key0]["categories"][key1]["categories"][categorieskey]["descriptionRU"]=categoriesROWS[key]["descriptionRU"]
              menu[key0]["categories"][key1]["categories"][categorieskey]["descriptionENG"]=categoriesROWS[key]["descriptionENG"]*/
            }
          }
        }

        for (let productcategories of menu[key0]["categories"][key1][
          "categories"
        ]) {
          for (let productkey in productcategories["content"]) {
            //console.log(productcategories["content"][productkey]["id"])

            for (let key in productROWS) {
              if (
                productcategories["content"][productkey]["id"] ==
                productROWS[key]["id"]
              ) {
                productcategories["content"][productkey]["id"] =
                  productROWS[key]["id"];
                productcategories["content"][productkey]["nameUA"] =
                  productROWS[key]["nameUA"];
                productcategories["content"][productkey]["nameRU"] =
                  productROWS[key]["nameRU"];
                productcategories["content"][productkey]["nameENG"] =
                  productROWS[key]["nameENG"];
                productcategories["content"][productkey]["descriptionUA"] =
                  productROWS[key]["descriptionUA"];
                productcategories["content"][productkey]["descriptionRU"] =
                  productROWS[key]["descriptionRU"];
                productcategories["content"][productkey]["descriptionENG"] =
                  productROWS[key]["descriptionENG"];
              }
            }
          }
        }
      }
    }


    fs.writeFileSync(corefilename, JSON.stringify(menu));
    return
  }

  protected timer(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  public async CreateAnswerJSON(answerfilename, corefilename, stoplistfilename?: string) {
    let rawdata = fs.readFileSync(corefilename);
    let stoplist;

    if (stoplistfilename != undefined) { stoplist = JSON.parse(fs.readFileSync(stoplistfilename)); }
    else {
      stoplist = [];
    }


    let menu = JSON.parse(rawdata);








    let answer = {};
    answer["ua"] = [];
    answer["ru"] = [];
    answer["eng"] = [];



    let MainGroupssortUA = {}
    let MainGroupssortRU = {}
    let MainGroupssortENG = {}


    let CategoriesGroupssortUA = {}
    let CategoriesGroupssortRU = {}
    let CategoriesGroupssortENG = {}


    let productsortUA = {}
    let productsortRU = {}
    let productsortENG = {}


    for (let key0 in menu) {
      if (menu[key0]["nameUA"] != "undefined" && menu[key0]["nameUA"] != undefined) { MainGroupssortUA[menu[key0]["nameUA"]] = parseInt(menu[key0]["tags"]["menuposition"]) }
      if (menu[key0]["nameRU"] != "undefined" && menu[key0]["nameENG"] != undefined) { MainGroupssortRU[menu[key0]["nameRU"]] = parseInt(menu[key0]["tags"]["menuposition"]) }
      if (menu[key0]["nameENG"] != "undefined" && menu[key0]["nameENG"] != undefined) { MainGroupssortENG[menu[key0]["nameENG"]] = parseInt(menu[key0]["tags"]["menuposition"]) }
    }
    for (let key0 in menu) {

      for (let key1 in menu[key0]["categories"]) {

        //ua
        if (menu[key0]["categories"][key1]["nameUA"] != "undefined" && menu[key0]["categories"][key1]["nameUA"] != undefined) {
          if (menu[key0]["categories"][key1]["tags"]["groupposition"] != undefined) {
            CategoriesGroupssortUA[menu[key0]["categories"][key1]["nameUA"]] = parseInt(menu[key0]["categories"][key1]["tags"]["groupposition"])
          }
          else {
            CategoriesGroupssortUA[menu[key0]["categories"][key1]["nameUA"]] = 10000
          }

        }
        //ru
        if (menu[key0]["categories"][key1]["nameRU"] != "undefined" && menu[key0]["categories"][key1]["nameRU"] != undefined) {
          if (menu[key0]["categories"][key1]["tags"]["groupposition"] != undefined) {
            CategoriesGroupssortRU[menu[key0]["categories"][key1]["nameRU"]] = parseInt(menu[key0]["categories"][key1]["tags"]["groupposition"])
          }
          else {
            CategoriesGroupssortRU[menu[key0]["categories"][key1]["nameRU"]] = 10000
          }

        }
        //eng

        if (menu[key0]["categories"][key1]["nameENG"] != "undefined" && menu[key0]["categories"][key1]["nameENG"] != undefined) {
          if (menu[key0]["categories"][key1]["tags"]["groupposition"] != undefined) {
            CategoriesGroupssortENG[menu[key0]["categories"][key1]["nameENG"]] = parseInt(menu[key0]["categories"][key1]["tags"]["groupposition"])
          }
          else {
            CategoriesGroupssortENG[menu[key0]["categories"][key1]["nameENG"]] = 10000
          }

        }


      }
    }

    for (let key0 in menu) {

      for (let key1 in menu[key0]["categories"]) {

        for (let productcategories of menu[key0]["categories"][key1][
          "categories"
        ]) {

          for (let productkey in productcategories["content"]) {

            //console.log(productcategories["content"][productkey]["tags"])
            //TODO: тут, если надо будет прикрутить сортировку по продуктам


          }
        }

      }
    }






    //UA TODO:

    for (let key0 in menu) {
      let helpobj1 = {};
      helpobj1[menu[key0]["nameUA"]] = [];
      //helpobj1["tags"]=menu[key0]["tags"]




      for (let key1 in menu[key0]["categories"]) {
        let helpobj2 = {};

        let IsCorrectTime = false;
        let timestart; let timeend; let timenow;
        if ((menu[key0]["categories"][key1]["tags"]["timeStart"] != undefined)) {
          timestart = parseInt(menu[key0]["categories"][key1]["tags"]["timeStart"].split(":")[0]) * 60 + parseInt(menu[key0]["categories"][key1]["tags"]["timeStart"].split(":")[1])
        }
        else { timestart = 0; }

        if ((menu[key0]["categories"][key1]["tags"]["timeEnd"] != undefined)) {
          timeend = parseInt(menu[key0]["categories"][key1]["tags"]["timeEnd"].split(":")[0]) * 60 + parseInt(menu[key0]["categories"][key1]["tags"]["timeEnd"].split(":")[1]);

        } else { timeend = 1440; }
        var now = moment();
        timenow = parseInt(now.format('HH')) * 60 + parseInt(now.format('mm'))
        IsCorrectTime = ((timestart <= timenow) && (timenow <= timeend))



        if (menu[key0]["categories"][key1]["nameUA"] != undefined && IsCorrectTime) {







          helpobj2["id"] = menu[key0]["categories"][key1]["id"];
          let catalogARR = [];
          for (let productcategories of menu[key0]["categories"][key1][
            "categories"
          ]) {
            let helpobj3 = {};
            helpobj3["name"] = productcategories["nameUA"];



            helpobj3["description"] = productcategories["descriptionUA"];
            helpobj3["type"] = productcategories["type"];




            helpobj3["content"] = [];

            //CONTENT





            for (let productkey in productcategories["content"]) {



              let helpobj4 = {};

              helpobj4["id"] = productcategories["content"][productkey]["id"];
              helpobj4["name"] = productcategories["content"][productkey]["nameUA"];
              helpobj4["description"] =
                productcategories["content"][productkey]["descriptionUA"];
              helpobj4["price"] = productcategories["content"][productkey]["price"];
              helpobj4["img"] = productcategories["content"][productkey]["img"];
              //helpobj4["tags"] = productcategories["content"][productkey]["tags"];
              helpobj4["urlimg"] =
                productcategories["content"][productkey]["urlimg"];
              helpobj4["pricefrom"] =
                productcategories["content"][productkey]["pricefrom"];
              //TODO: console.log(stoplist.includes("c0d8a359-72c2-4a6b-a550-672461f4f49"))
              if (helpobj4["name"] != "undefined" && helpobj4["name"] != undefined && !(stoplist.includes(helpobj4["id"]))) { helpobj3["content"].push(helpobj4); }


            }
            if (helpobj3["name"] != "undefined" && helpobj3["name"] != undefined) { catalogARR.push(helpobj3); }
          }
          //console.log(helpobj2)
          helpobj2[menu[key0]["categories"][key1]["nameUA"]] = {
            catalog: catalogARR,
          };
          helpobj1[menu[key0]["nameUA"]].push(helpobj2);
        }

      }
      answer["ua"].push(helpobj1);
      //console.log(menu[key0]["nameUA"])
    }

    //RU TODO:

    for (let key0 in menu) {
      let helpobj1 = {};
      helpobj1[menu[key0]["nameRU"]] = [];
      //helpobj1["tags"]=menu[key0]["tags"]




      for (let key1 in menu[key0]["categories"]) {
        let helpobj2 = {};
        let IsCorrectTime = false;
        let timestart; let timeend; let timenow;
        if ((menu[key0]["categories"][key1]["tags"]["timeStart"] != undefined)) {
          timestart = parseInt(menu[key0]["categories"][key1]["tags"]["timeStart"].split(":")[0]) * 60 + parseInt(menu[key0]["categories"][key1]["tags"]["timeStart"].split(":")[1])
        }
        else { timestart = 0; }

        if ((menu[key0]["categories"][key1]["tags"]["timeEnd"] != undefined)) {
          timeend = parseInt(menu[key0]["categories"][key1]["tags"]["timeEnd"].split(":")[0]) * 60 + parseInt(menu[key0]["categories"][key1]["tags"]["timeEnd"].split(":")[1]);

        } else { timeend = 1440; }
        var now = moment();
        timenow = parseInt(now.format('HH')) * 60 + parseInt(now.format('mm'))
        IsCorrectTime = ((timestart <= timenow) && (timenow <= timeend))

        if (menu[key0]["categories"][key1]["nameRU"] != undefined && IsCorrectTime) {
          helpobj2["id"] = menu[key0]["categories"][key1]["id"];
          // helpobj2["tags"] =menu[key0]["categories"][key1]["tags"]


          let catalogARR = [];
          for (let productcategories of menu[key0]["categories"][key1][
            "categories"
          ]) {
            let helpobj3 = {};
            helpobj3["name"] = productcategories["nameRU"];



            helpobj3["description"] = productcategories["descriptionRU"];
            helpobj3["type"] = productcategories["type"];




            helpobj3["content"] = [];

            //CONTENT





            for (let productkey in productcategories["content"]) {



              let helpobj4 = {};

              helpobj4["id"] = productcategories["content"][productkey]["id"];
              helpobj4["name"] = productcategories["content"][productkey]["nameRU"];
              helpobj4["description"] =
                productcategories["content"][productkey]["descriptionRU"];
              helpobj4["price"] = productcategories["content"][productkey]["price"];
              helpobj4["img"] = productcategories["content"][productkey]["img"];
              // helpobj4["tags"] = productcategories["content"][productkey]["tags"];
              helpobj4["urlimg"] =
                productcategories["content"][productkey]["urlimg"];
              helpobj4["pricefrom"] =
                productcategories["content"][productkey]["pricefrom"];

              if (helpobj4["name"] != "undefined" && helpobj4["name"] != undefined && !(stoplist.includes(helpobj4["id"]))) { helpobj3["content"].push(helpobj4); }


            }
            if (helpobj3["name"] != "undefined" && helpobj3["name"] != undefined) { catalogARR.push(helpobj3); }
          }
          //console.log(helpobj2)
          helpobj2[menu[key0]["categories"][key1]["nameRU"]] = {
            catalog: catalogARR,
          };
          helpobj1[menu[key0]["nameRU"]].push(helpobj2);
        }

      }
      answer["ru"].push(helpobj1);
      //console.log(menu[key0]["nameUA"])
    }

    //ENG TODO:

    for (let key0 in menu) {
      let helpobj1 = {};
      helpobj1[menu[key0]["nameENG"]] = [];
      // helpobj1["tags"]=menu[key0]["tags"]




      for (let key1 in menu[key0]["categories"]) {
        let helpobj2 = {};
        let IsCorrectTime = false;
        let timestart; let timeend; let timenow;
        if ((menu[key0]["categories"][key1]["tags"]["timeStart"] != undefined)) {
          timestart = parseInt(menu[key0]["categories"][key1]["tags"]["timeStart"].split(":")[0]) * 60 + parseInt(menu[key0]["categories"][key1]["tags"]["timeStart"].split(":")[1])
        }
        else { timestart = 0; }

        if ((menu[key0]["categories"][key1]["tags"]["timeEnd"] != undefined)) {
          timeend = parseInt(menu[key0]["categories"][key1]["tags"]["timeEnd"].split(":")[0]) * 60 + parseInt(menu[key0]["categories"][key1]["tags"]["timeEnd"].split(":")[1]);

        } else { timeend = 1440; }
        var now = moment();
        timenow = parseInt(now.format('HH')) * 60 + parseInt(now.format('mm'))
        IsCorrectTime = ((timestart <= timenow) && (timenow <= timeend))

        if (menu[key0]["categories"][key1]["nameENG"] != undefined && IsCorrectTime) {
          helpobj2["id"] = menu[key0]["categories"][key1]["id"];
          // helpobj2["tags"] =menu[key0]["categories"][key1]["tags"]


          let catalogARR = [];
          for (let productcategories of menu[key0]["categories"][key1][
            "categories"
          ]) {
            let helpobj3 = {};
            helpobj3["name"] = productcategories["nameENG"];
            helpobj3["description"] = productcategories["descriptionENG"];
            helpobj3["type"] = productcategories["type"];




            helpobj3["content"] = [];

            //CONTENT





            for (let productkey in productcategories["content"]) {



              let helpobj4 = {};

              helpobj4["id"] = productcategories["content"][productkey]["id"];
              helpobj4["name"] = productcategories["content"][productkey]["nameENG"];
              helpobj4["description"] =
                productcategories["content"][productkey]["descriptionENG"];
              helpobj4["price"] = productcategories["content"][productkey]["price"];
              helpobj4["img"] = productcategories["content"][productkey]["img"];
              //helpobj4["tags"] = productcategories["content"][productkey]["tags"];
              helpobj4["urlimg"] =
                productcategories["content"][productkey]["urlimg"];
              helpobj4["pricefrom"] =
                productcategories["content"][productkey]["pricefrom"];

              if (helpobj4["name"] != "undefined" && helpobj4["name"] != undefined && !(stoplist.includes(helpobj4["id"]))) { helpobj3["content"].push(helpobj4); }


            }
            if (helpobj3["name"] != "undefined" && helpobj3["name"] != undefined) { catalogARR.push(helpobj3); }
          }
          //console.log(helpobj2)
          helpobj2[menu[key0]["categories"][key1]["nameENG"]] = {
            catalog: catalogARR,
          };
          helpobj1[menu[key0]["nameENG"]].push(helpobj2);
        }

      }
      answer["eng"].push(helpobj1);
      //console.log(menu[key0]["nameUA"])
    }








    for (let i = 0; i < answer["ua"].length - 1; i++) {
      if (MainGroupssortUA[Object.keys(answer["ua"][i])[0]] > MainGroupssortUA[Object.keys(answer["ua"][i + 1])[0]]) {
        let helpsortobj = answer["ua"][i];
        answer["ua"][i] = answer["ua"][i + 1];
        answer["ua"][i + 1] = helpsortobj
        i = -1

      }
    }
    for (let i = 0; i < answer["ru"].length - 1; i++) {
      if (MainGroupssortRU[Object.keys(answer["ru"][i])[0]] > MainGroupssortRU[Object.keys(answer["ru"][i + 1])[0]]) {
        let helpsortobj = answer["ru"][i];
        answer["ru"][i] = answer["ru"][i + 1];
        answer["ru"][i + 1] = helpsortobj
        i = -1
      }
    }
    for (let i = 0; i < answer["eng"].length - 1; i++) {
      if (MainGroupssortENG[Object.keys(answer["eng"][i])[0]] > MainGroupssortENG[Object.keys(answer["eng"][i + 1])[0]]) {
        let helpsortobj = answer["eng"][i];
        answer["eng"][i] = answer["eng"][i + 1];
        answer["eng"][i + 1] = helpsortobj
        i = -1
      }
    }






    //UA
    for (let i1 = 0; i1 < answer["ua"].length; i1++) {
      for (let i2 = 0; i2 < answer["ua"][i1][Object.keys(answer["ua"][i1])[0]].length - 1; i2++) {
        if (CategoriesGroupssortUA[Object.keys(answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2])[1]] > CategoriesGroupssortUA[Object.keys(answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2 + 1])[1]]) {

          //console.log(CategoriesGroupssortUA[Object.keys(answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2])[1]],CategoriesGroupssortUA[Object.keys(answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2+1])[1]])

          let sorthelpobj = answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2];
          answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2] = answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2 + 1]
          answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2 + 1] = sorthelpobj
          i2 = -1;

        }
      }
    }

    //RU
    for (let i1 = 0; i1 < answer["ru"].length; i1++) {
      for (let i2 = 0; i2 < answer["ru"][i1][Object.keys(answer["ru"][i1])[0]].length - 1; i2++) {
        if (CategoriesGroupssortRU[Object.keys(answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2])[1]] > CategoriesGroupssortRU[Object.keys(answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2 + 1])[1]]) {

          //console.log(CategoriesGroupssortRU[Object.keys(answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2])[1]],CategoriesGroupssortRU[Object.keys(answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2+1])[1]])

          let sorthelpobj = answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2];
          answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2] = answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2 + 1]
          answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2 + 1] = sorthelpobj
          i2 = -1;

        }
      }
    }

    //ENG
    for (let i1 = 0; i1 < answer["eng"].length; i1++) {
      for (let i2 = 0; i2 < answer["eng"][i1][Object.keys(answer["eng"][i1])[0]].length - 1; i2++) {
        if (CategoriesGroupssortENG[Object.keys(answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2])[1]] > CategoriesGroupssortENG[Object.keys(answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2 + 1])[1]]) {

          //console.log(CategoriesGroupssortENG[Object.keys(answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2])[1]],CategoriesGroupssortENG[Object.keys(answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2+1])[1]])

          let sorthelpobj = answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2];
          answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2] = answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2 + 1]
          answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2 + 1] = sorthelpobj
          i2 = -1;

        }
      }
    }











    fs.writeFileSync(answerfilename, JSON.stringify(answer));
  }

  public async CreateStoplistJSON(stoplist, stoplistfilename) {

    let answer = []

    for (let element of stoplist["stopList"][0]["items"]) {
      //console.log(element['productId'])
      answer.push(element['productId'])
    }

    //console.log( JSON.stringify(answer))

    //console.log(JSON.parse( JSON.stringify(answer)))
    fs.writeFileSync(stoplistfilename, JSON.stringify(answer));

  }
}
