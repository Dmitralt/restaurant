"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var API_QuerryClass_1 = require("./API_QuerryClass");
var fs = require("fs");
function WorkFunction() {
    return __awaiter(this, void 0, void 0, function () {
        var api, marker, nomenclature, stoplist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new API_QuerryClass_1.APIRequests("https://iiko.biz:9900/api/0");
                    return [4 /*yield*/, api.setcurentmarker("publicistAPI", "tRxa25T1P9")]; //TODO: получаем маркер  
                case 1:
                    _a.sent(); //TODO: получаем маркер  
                    marker = api.curent_marker;
                    return [4 /*yield*/, api.getnomenclature("0beff7b8-8f87-11ea-80f4-d8d38565926f", marker)]; //TODO: получаем номенклатуру (нужна для формирования таблицы под языки)
                case 2:
                    nomenclature = _a.sent() //TODO: получаем номенклатуру (нужна для формирования таблицы под языки)
                    ;
                    return [4 /*yield*/, api.getDeliveryStopList("0beff7b8-8f87-11ea-80f4-d8d38565926f", marker)
                        //await api.CoreJSONcreator(nomenclature,"nomenclatureJSON.json");//TODO: создание центрального Джейсон файла по номенклатуре
                        //await api.CreateTable("nomenclatureJSON.json")//TODO: создание таблицы в гугл докс на основе Кор-джейсона
                        //await api.LoadFromTable("nomenclatureJSON.json") //TODO: обновление Кор-джейсона по гугл-таблице
                    ];
                case 3:
                    stoplist = _a.sent();
                    //await api.CoreJSONcreator(nomenclature,"nomenclatureJSON.json");//TODO: создание центрального Джейсон файла по номенклатуре
                    //await api.CreateTable("nomenclatureJSON.json")//TODO: создание таблицы в гугл докс на основе Кор-джейсона
                    //await api.LoadFromTable("nomenclatureJSON.json") //TODO: обновление Кор-джейсона по гугл-таблице
                    return [4 /*yield*/, api.CreateAnswerJSON("result.json", "nomenclatureJSON.json", "stoplistJSON.json")
                        //await api.CreateStoplistJSON(stoplist,"stoplistJSON.json")//TODO: превращает полученный по запросу стоплист в Джейсон файл.
                    ]; //превращение кор-джейсона в вид для фронтенда/ стоплист - не обязательный параметр
                case 4:
                    //await api.CoreJSONcreator(nomenclature,"nomenclatureJSON.json");//TODO: создание центрального Джейсон файла по номенклатуре
                    //await api.CreateTable("nomenclatureJSON.json")//TODO: создание таблицы в гугл докс на основе Кор-джейсона
                    //await api.LoadFromTable("nomenclatureJSON.json") //TODO: обновление Кор-джейсона по гугл-таблице
                    _a.sent(); //превращение кор-джейсона в вид для фронтенда/ стоплист - не обязательный параметр
                    return [2 /*return*/];
            }
        });
    });
}
WorkFunction();
