import { APIRequests } from "./API_QuerryClass";
const fs = require("fs");

async function WorkFunction() {


  let api = new APIRequests("https://iiko.biz:9900/api/0");
  await api.setcurentmarker("publicistAPI", "tRxa25T1P9")//TODO: получаем маркер  
  let marker = api.curent_marker

  let nomenclature = await api.getnomenclature("0beff7b8-8f87-11ea-80f4-d8d38565926f", marker)//TODO: получаем номенклатуру (нужна для формирования таблицы под языки)
  let stoplist=await api.getDeliveryStopList("0beff7b8-8f87-11ea-80f4-d8d38565926f", marker)

  	//await api.CoreJSONcreator(nomenclature,"nomenclatureJSON.json");//TODO: создание центрального Джейсон файла по номенклатуре
	//await api.CreateTable("nomenclatureJSON.json")//TODO: создание таблицы в гугл докс на основе Кор-джейсона
	//await api.LoadFromTable("nomenclatureJSON.json") //TODO: обновление Кор-джейсона по гугл-таблице
	await api.CreateAnswerJSON("result.json","nomenclatureJSON.json","stoplistJSON.json")//превращение кор-джейсона в вид для фронтенда/ стоплист - не обязательный параметр

  //await api.CreateStoplistJSON(stoplist,"stoplistJSON.json")//TODO: превращает полученный по запросу стоплист в Джейсон файл.

 
}

WorkFunction();

