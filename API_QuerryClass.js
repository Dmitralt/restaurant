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
exports.APIRequests = void 0;
//var requestify = require('requestify');
var request = require("request");
var moment = require("moment");
var GoogleSpreadsheet = require("google-spreadsheet").GoogleSpreadsheet;
var promisify = require("util").promisify;
var creds = require("./settings/client_secret.json");
var fs = require("fs");
var title = require("process").title;
var exeption = "error";
var APIRequests = /** @class */ (function () {
    function APIRequests(address) {
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
    APIRequests.prototype.setcurentmarker = function (user_id, user_secret) {
        return __awaiter(this, void 0, void 0, function () {
            var body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + '/auth/access_token?user_id=' + user_id + '&user_secret=' + user_secret, {}, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        this.curent_marker = (body + "").toString().replace("\"", "").replace("\"", "");
                        return [2 /*return*/, "done"];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //https://iiko.biz:9900/api/0/nomenclature/0beff7b8-8f87-11ea-80f4-d8d38565926f?access_token=X4XMwv6gBmWWUcvatJaKILUs0mEzilxByH8N23FXQMKRhk1Bfv18OA0sH9bsBSqCMORIHQ_Db8HR2zooV2pJ9g2
    // /api/0/nomenclature/{organizationId}?access_token={accessToken}
    //НОМЕНКЛАТУРА
    //0beff7b8-8f87-11ea-80f4-d8d38565926f -organisationid
    APIRequests.prototype.getnomenclature = function (organisation_id, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = {};
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //Получить стоп-лист по сети ресторанов
    // /api/0/stopLists/getDeliveryStopList?access_token={accessToken}&organization={organizationId}
    /*public async getDeliveryStopList(organisation_id: string, accessToken: string) {
      try {
        let a = await requestify.get(this.address + "/stopLists/getDeliveryStopList?access_token=" + accessToken + "&organization=" + organisation_id)
        return (a.getBody())
      } catch{ return exeption }
    }*/
    APIRequests.prototype.getDeliveryStopList = function (organisation_id, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = {};
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + "/stopLists/getDeliveryStopList?access_token=" + accessToken + "&organization=" + organisation_id, { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    APIRequests.prototype.create_order = function (accessToken, data) {
        return __awaiter(this, void 0, void 0, function () {
            var body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Promise(function (res) { return request.post(_this.address + "/orders/add?access_token=" + accessToken + "&request_timeout=0:0:30", { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /*public async getgroups(organisation_id: string, accessToken: string) {
      try {
        let a = await requestify.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken)
        return (a.getBody()["groups"])
      } catch{ return exeption }
    }*/
    APIRequests.prototype.getgroups = function (organisation_id, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = {};
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body["groups"]];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /*public async getproductCategories(organisation_id: string, accessToken: string) {
      try {
        let a = await requestify.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken)
        return (a.getBody()["productCategories"])
      } catch{ return exeption }
    }*/
    APIRequests.prototype.getproductCategories = function (organisation_id, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = {};
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body["productCategories"]];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /*public async getproducts(organisation_id: string, accessToken: string) {
      try {
        let a = await requestify.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken)
        return (a.getBody()["products"])
      } catch{ return exeption }
    }*/
    APIRequests.prototype.getproducts = function (organisation_id, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = {};
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body["products"]];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /* public async getrevision(organisation_id: string, accessToken: string) {
       try {
         let a = await requestify.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken)
         return (a.getBody()["revision"])
       } catch{ return exeption }
     }
     */
    APIRequests.prototype.getrevision = function (organisation_id, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = {};
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body["revision"]];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /* public async getuploadDate(organisation_id: string, accessToken: string) {
       try {
         let a = await requestify.get(this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken)
         return (a.getBody()["uploadDate"])
       } catch{ return exeption }
     }*/
    APIRequests.prototype.getuploadDate = function (organisation_id, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = {};
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body["uploadDate"]];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
    APIRequests.prototype.parser = function (nomenclature) {
        return __awaiter(this, void 0, void 0, function () {
            var answer, ancientgroup, parentGroup, key, groupname, menuposition, tags, _i, tags_1, element, pushobj, key, maingroup, name_1, parentid, id, grouptype, groupposition, tags, _a, tags_2, element, pushableobj, key1, key2, pushableobj, name_2, parentid, id, key1, key2, key1, ancientgroupkey, productname, key01, key02, key03, imgarr, urlimgarr, _b, _c, element, pushableimg, pricefrom, tags, _d, tags_3, element, pushedproduct, Glassorbottle, tags, _e, tags_4, element, key0, key1, element, key2, key0, key1, element, positionARR, key, key, help, key, key0, keyname, key, help;
            return __generator(this, function (_f) {
                answer = {};
                answer["ua"] = [];
                ancientgroup = {};
                parentGroup = {};
                for (key in nomenclature["groups"]) {
                    //console.log(nomenclature["groups"][key]["parentGroup"])
                    if (nomenclature["groups"][key]["parentGroup"] == null) {
                        groupname = (nomenclature["groups"][key]["name"] + "").toString();
                        menuposition = null;
                        if (nomenclature["groups"][key]["tags"] != null) {
                            tags = nomenclature["groups"][key]["tags"][0].split(" $ ");
                            for (_i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
                                element = tags_1[_i];
                                if (element.split("=")[0] == 'menuposition') {
                                    menuposition = element.split("=")[1];
                                }
                            }
                        }
                        if (groupname == "Бар" ||
                            groupname == "Вино" ||
                            groupname == "Їжа") {
                            pushobj = {};
                            pushobj[groupname] = [];
                            answer["ua"].push(pushobj);
                            ancientgroup[nomenclature["groups"][key]["id"]] = { "name": nomenclature["groups"][key]["name"], "menuposition": parseInt(menuposition) };
                        }
                    }
                }
                for (key in nomenclature["groups"]) {
                    if (nomenclature["groups"][key]["parentGroup"] != null) {
                        maingroup = ancientgroup[nomenclature["groups"][key]["parentGroup"]]["name"];
                        if (maingroup != 'Вино') {
                            name_1 = nomenclature["groups"][key]["name"];
                            parentid = nomenclature["groups"][key]["parentGroup"];
                            id = nomenclature["groups"][key]["id"];
                            grouptype = "catalogFood";
                            if (maingroup == 'Бар') {
                                grouptype = "list";
                            }
                            groupposition = null;
                            if (nomenclature["groups"][key]["tags"] != null) {
                                tags = nomenclature["groups"][key]["tags"][0].split(" $ ");
                                for (_a = 0, tags_2 = tags; _a < tags_2.length; _a++) {
                                    element = tags_2[_a];
                                    if (element.split("=")[0] == 'groupposition') {
                                        groupposition = element.split("=")[1];
                                    }
                                }
                            }
                            parentGroup[id] = { name: name_1, parentid: parentid, groupposition: groupposition };
                            pushableobj = {};
                            pushableobj["id"] = nomenclature["groups"][key]["id"];
                            pushableobj[name_1] = {
                                catalog: [{
                                        name: name_1,
                                        description: nomenclature["groups"][key]["description"],
                                        type: grouptype,
                                        content: []
                                    }]
                            };
                            for (key1 in answer["ua"]) {
                                for (key2 in answer["ua"][key1]) {
                                    if (key2 == maingroup) {
                                        // console.log(key2)
                                        answer["ua"][key1][key2].push(pushableobj);
                                    }
                                }
                            }
                            /*  answer["ua"][0][maingroup].push(pushableobj)*/
                        }
                        else {
                            pushableobj = {};
                            name_2 = nomenclature["groups"][key]["name"];
                            parentid = nomenclature["groups"][key]["parentGroup"];
                            id = nomenclature["groups"][key]["id"];
                            parentGroup[id] = { name: name_2, parentid: parentid };
                            pushableobj["id"] = nomenclature["groups"][key]["id"];
                            pushableobj[name_2] = {
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
                            };
                            for (key1 in answer["ua"]) {
                                for (key2 in answer["ua"][key1]) {
                                    if (key2 == maingroup) {
                                        // console.log(key2)
                                        answer["ua"][key1][key2].push(pushableobj);
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
                for (key1 in nomenclature["products"]) {
                    ancientgroupkey = void 0;
                    if (nomenclature["products"][key1]["parentGroup"] != null && parentGroup[nomenclature["products"][key1]["parentGroup"]] != null) {
                        //console.log("подгрупа",parentGroup[nomenclature["products"][key1]["parentGroup"]],nomenclature["products"][key1]["parentGroup"])
                        ancientgroupkey = ancientgroup[parentGroup[nomenclature["products"][key1]["parentGroup"]]["parentid"]]["name"];
                        productname = parentGroup[nomenclature["products"][key1]["parentGroup"]]["name"];
                        //console.log("группа",ancientgroupkey)
                        //console.log("---------------")
                        for (key01 in answer["ua"]) {
                            for (key02 in answer["ua"][key01]) {
                                if (key02 == ancientgroupkey) {
                                    // console.log( answer["ua"][key01][key02])
                                    for (key03 in answer["ua"][key01][key02]) {
                                        if (answer["ua"][key01][key02][key03]["id"] == nomenclature["products"][key1]["parentGroup"]) {
                                            imgarr = [];
                                            urlimgarr = [];
                                            for (_b = 0, _c = nomenclature["products"][key1]["images"]; _b < _c.length; _b++) {
                                                element = _c[_b];
                                                pushableimg = element["imageUrl"].split("/");
                                                imgarr.push("files/small/small-" + pushableimg[pushableimg.length - 1]);
                                                urlimgarr.push({ "imageUrl": element["imageUrl"], "uploadDate": element["uploadDate"] });
                                            }
                                            pricefrom = false;
                                            if (nomenclature["products"][key1]["tags"] != null) {
                                                tags = nomenclature["products"][key1]["tags"][0].split(" $ ");
                                                for (_d = 0, tags_3 = tags; _d < tags_3.length; _d++) {
                                                    element = tags_3[_d];
                                                    if (element.split("=")[0] == 'pricefrom') {
                                                        if (element.split("=")[1] == "true") {
                                                            pricefrom = true;
                                                        }
                                                    }
                                                }
                                            }
                                            pushedproduct = {
                                                id: nomenclature["products"][key1]["id"],
                                                name: nomenclature["products"][key1]["name"],
                                                description: nomenclature["products"][key1]["description"],
                                                price: nomenclature["products"][key1]["price"],
                                                img: imgarr,
                                                urlimg: urlimgarr,
                                                pricefrom: pricefrom
                                            };
                                            if (key02 != "Вино") {
                                                if (typeof nomenclature["products"][key1]["price"] == "number") {
                                                    answer["ua"][key01][key02][key03][productname]["catalog"][0]["content"].push(pushedproduct);
                                                    //console.log(pushedproduct)
                                                }
                                            }
                                            else {
                                                Glassorbottle = -1;
                                                if (nomenclature["products"][key1]["tags"] != null) {
                                                    tags = nomenclature["products"][key1]["tags"][0].split(" $ ");
                                                    for (_e = 0, tags_4 = tags; _e < tags_4.length; _e++) {
                                                        element = tags_4[_e];
                                                        if (element.split("=")[0] == 'listgroup') {
                                                            if (element.split("=")[1] == "glass") {
                                                                Glassorbottle = 0;
                                                            }
                                                            if (element.split("=")[1] == "botlle") {
                                                                Glassorbottle = 1;
                                                            }
                                                        }
                                                    }
                                                    if (typeof nomenclature["products"][key1]["price"] == "number" && Glassorbottle != -1) {
                                                        answer["ua"][key01][key02][key03][productname]["catalog"][Glassorbottle]["content"].push(pushedproduct);
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
                for (key0 = 0; key0 < answer["ua"].length; key0++) {
                    for (key1 = 0; key1 < answer["ua"][key0][Object.keys(answer["ua"][key0])[0]].length; key1++) {
                        element = answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1][Object.keys(answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1])[1]]["catalog"];
                        for (key2 = 0; key2 < element.length; key2++) {
                            if (element[key2]["content"].length == 0) {
                                if (key2 != 0) {
                                    element = element.splice(key2, 1);
                                    key2 = -1;
                                }
                                else {
                                    element = [];
                                }
                            }
                        }
                    }
                }
                for (key0 = 0; key0 < answer["ua"].length; key0++) {
                    for (key1 = 0; key1 < answer["ua"][key0][Object.keys(answer["ua"][key0])[0]].length; key1++) {
                        element = answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1][Object.keys(answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1])[1]]["catalog"];
                        if (element.length == 0) {
                            if (key1 != 0) {
                                answer["ua"][key0][Object.keys(answer["ua"][key0])[0]].splice(key1, 1);
                                key1 = -1;
                            }
                            else {
                                answer["ua"][key0][Object.keys(answer["ua"][key0])[0]] = [];
                            }
                        }
                    }
                }
                positionARR = {};
                for (key in ancientgroup) {
                    positionARR[ancientgroup[key]["name"]] = ancientgroup[key]["menuposition"];
                }
                for (key = 1; key < answer["ua"].length; key++) {
                    if (positionARR[Object.keys(answer["ua"][key])[0]] < positionARR[Object.keys(answer["ua"][key - 1])[0]]) {
                        help = answer["ua"][key];
                        answer["ua"][key] = {};
                        answer["ua"][key] = answer["ua"][key - 1];
                        answer["ua"][key - 1] = help;
                        key = 0;
                    }
                }
                //console.log("------------------------------------------------------")
                positionARR = {};
                for (key in parentGroup) {
                    positionARR[parentGroup[key]["name"]] = parentGroup[key]["groupposition"];
                }
                //   console.log(positionARR)
                //  console.log("------------------------------------------------------")
                for (key0 in answer["ua"]) {
                    keyname = Object.keys(answer["ua"][key0])[0];
                    for (key = 1; key < answer["ua"][key0][keyname].length; key++) {
                        if (parseInt(positionARR[Object.keys(answer["ua"][key0][keyname][key])[1]]) < parseInt(positionARR[Object.keys(answer["ua"][key0][keyname][key - 1])[1]])) {
                            help = answer["ua"][key0][keyname][key];
                            answer["ua"][key0][keyname][key] = {};
                            answer["ua"][key0][keyname][key] = answer["ua"][key0][keyname][key - 1];
                            answer["ua"][key0][keyname][key - 1] = help;
                            key = 0;
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
                return [2 /*return*/, answer];
            });
        });
    };
    APIRequests.prototype.CoreJSONcreator = function (nomenclature, corefilename) {
        return __awaiter(this, void 0, void 0, function () {
            var answer, key0, new_nameRU, new_nameENG, tags, _i, _a, element, newobj, key0, tags, _b, _c, element, categories, newobj, _d, _e, product, imgarr, urlimgarr, _f, _g, element, pushableimg, pricefrom, tags_6, _h, tags_5, element, tags, _j, _k, element, pushedproduct, key0, key1;
            return __generator(this, function (_l) {
                answer = {};
                for (key0 in nomenclature["groups"]) {
                    if (nomenclature["groups"][key0]["parentGroup"] == null) {
                        if (nomenclature["groups"][key0]["name"] == "Бар" ||
                            nomenclature["groups"][key0]["name"] == "Вино" ||
                            nomenclature["groups"][key0]["name"] == "Їжа") {
                            new_nameRU = void 0, new_nameENG = void 0;
                            if (nomenclature["groups"][key0]["name"] == "Бар") {
                                new_nameRU = "Бар";
                                new_nameENG = "Bar";
                            }
                            if (nomenclature["groups"][key0]["name"] == "Вино") {
                                new_nameRU = "Вино";
                                new_nameENG = "Wine";
                            }
                            if (nomenclature["groups"][key0]["name"] == "Їжа") {
                                new_nameRU = "Еда";
                                new_nameENG = "Food";
                            }
                            tags = {};
                            for (_i = 0, _a = nomenclature["groups"][key0]["tags"][0].split(" $ "); _i < _a.length; _i++) {
                                element = _a[_i];
                                tags[element.split("=")[0]] = element.split("=")[1];
                            }
                            newobj = {
                                "id": nomenclature["groups"][key0]["id"],
                                "nameUA": nomenclature["groups"][key0]["name"],
                                "nameRU": new_nameRU,
                                "nameENG": new_nameENG,
                                "descriptionUA": nomenclature["groups"][key0]["description"],
                                "descriptionRU": "",
                                "descriptionENG": "",
                                "tags": tags,
                                "categories": {}
                            };
                            answer[nomenclature["groups"][key0]["id"]] = newobj;
                        }
                    }
                }
                for (key0 in nomenclature["groups"]) {
                    if (nomenclature["groups"][key0]["parentGroup"] != null) {
                        //array.hasOwnProperty("имя поля")
                        if (answer.hasOwnProperty(nomenclature["groups"][key0]["parentGroup"])) {
                            tags = {};
                            for (_b = 0, _c = nomenclature["groups"][key0]["tags"][0].split(" $ "); _b < _c.length; _b++) {
                                element = _c[_b];
                                tags[element.split("=")[0]] = element.split("=")[1];
                            }
                            categories = [];
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
                                    }];
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
                                    }];
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
                                    }];
                            }
                            newobj = {
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
                            };
                            answer[nomenclature["groups"][key0]["parentGroup"]]["categories"][nomenclature["groups"][key0]["id"]] = newobj;
                        }
                        else {
                        }
                    }
                }
                //nomenclature["products"]
                for (_d = 0, _e = nomenclature["products"]; _d < _e.length; _d++) {
                    product = _e[_d];
                    imgarr = [];
                    urlimgarr = [];
                    if (product["images"] != null) {
                        for (_f = 0, _g = product["images"]; _f < _g.length; _f++) {
                            element = _g[_f];
                            pushableimg = element["imageUrl"].split("/");
                            imgarr.push("files/small/small-" + pushableimg[pushableimg.length - 1]);
                            urlimgarr.push({ "imageUrl": element["imageUrl"], "uploadDate": element["uploadDate"] });
                        }
                    }
                    pricefrom = false;
                    if (product["tags"] != null) {
                        tags_6 = product["tags"][0].split(" $ ");
                        for (_h = 0, tags_5 = tags_6; _h < tags_5.length; _h++) {
                            element = tags_5[_h];
                            if (element.split("=")[0] == 'pricefrom') {
                                if (element.split("=")[1] == "true") {
                                    pricefrom = true;
                                }
                            }
                        }
                    }
                    tags = {};
                    if (product["tags"] != null) {
                        for (_j = 0, _k = product["tags"][0].split(" $ "); _j < _k.length; _j++) {
                            element = _k[_j];
                            tags[element.split("=")[0]] = element.split("=")[1];
                        }
                    }
                    pushedproduct = {
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
                    };
                    // console.log(pushedproduct)
                    // console.log(product["groupId"])
                    // console.log(product)
                    // console.log("++++++++++++++++++++++++++++++++++++++++++++")
                    for (key0 in answer) {
                        for (key1 in answer[key0]["categories"]) {
                            if (key1 == product["parentGroup"]) {
                                //Сюда запихивать
                                if (answer[key0]["nameUA"] != "Вино") {
                                    // console.log(answer[key0]["categories"][key1]["categories"][0]["content"])
                                    //answer[key0]["categories"][key1]["categories"][0]["content"].push(pushedproduct)
                                    answer[key0]["categories"][key1]["categories"][0]["content"][pushedproduct["id"]] = (pushedproduct);
                                }
                                else {
                                    if (pushedproduct["tags"]["listgroup"] == "glass") {
                                        //console.log("TO GLASS")
                                        // answer[key0]["categories"][key1]["categories"][0]["content"].push(pushedproduct)
                                        answer[key0]["categories"][key1]["categories"][0]["content"][pushedproduct["id"]] = (pushedproduct);
                                    }
                                    if (pushedproduct["tags"]["listgroup"] == "botlle") {
                                        //console.log("TO BOTTLE")
                                        // answer[key0]["categories"][key1]["categories"][1]["content"].push(pushedproduct)
                                        answer[key0]["categories"][key1]["categories"][1]["content"][pushedproduct["id"]] = (pushedproduct);
                                    }
                                }
                            }
                        }
                    }
                    //console.log("-------------------------------------------")
                }
                fs.writeFileSync(corefilename, JSON.stringify(answer));
                return [2 /*return*/];
            });
        });
    };
    APIRequests.prototype.CreateTable = function (corefilename) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, info, count, i, productssheet, categoriessheet, rawdata, menu, _a, _b, _i, key0, _c, _d, _e, key1, _f, _g, productcategories, _h, _j, _k, productkey, newRow;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        doc = new GoogleSpreadsheet("1ntYkciirfVkgG2OjIcwBGDwfNfHLlqN2QcX9WVOhGpE");
                        return [4 /*yield*/, doc.useServiceAccountAuth(creds)];
                    case 1:
                        _l.sent();
                        return [4 /*yield*/, doc.loadInfo()];
                    case 2:
                        info = _l.sent();
                        return [4 /*yield*/, doc.sheetCount];
                    case 3:
                        count = _l.sent();
                        return [4 /*yield*/, doc.sheetsByIndex[0].clear()];
                    case 4:
                        _l.sent();
                        return [4 /*yield*/, doc.sheetsByIndex[0].updateProperties({ title: "del" })];
                    case 5:
                        _l.sent();
                        i = count;
                        _l.label = 6;
                    case 6:
                        if (!(i > 1)) return [3 /*break*/, 9];
                        return [4 /*yield*/, doc.sheetsByIndex[i - 1]["delete"]()];
                    case 7:
                        _l.sent();
                        _l.label = 8;
                    case 8:
                        i--;
                        return [3 /*break*/, 6];
                    case 9: return [4 /*yield*/, doc.addSheet({
                            title: "продукты",
                            headerValues: [
                                "id",
                                "nameUA",
                                "nameRU",
                                "nameENG",
                                "descriptionUA",
                                "descriptionRU",
                                "descriptionENG",
                            ]
                        })];
                    case 10:
                        _l.sent();
                        return [4 /*yield*/, doc.addSheet({
                                title: "категории",
                                headerValues: [
                                    "id",
                                    "nameUA",
                                    "nameRU",
                                    "nameENG",
                                    "descriptionUA",
                                    "descriptionRU",
                                    "descriptionENG",
                                ]
                            })];
                    case 11:
                        _l.sent();
                        return [4 /*yield*/, doc.sheetsByIndex[0]["delete"]()];
                    case 12:
                        _l.sent();
                        productssheet = doc.sheetsByIndex[0];
                        categoriessheet = doc.sheetsByIndex[1];
                        rawdata = fs.readFileSync(corefilename);
                        menu = JSON.parse(rawdata);
                        _a = [];
                        for (_b in menu)
                            _a.push(_b);
                        _i = 0;
                        _l.label = 13;
                    case 13:
                        if (!(_i < _a.length)) return [3 /*break*/, 25];
                        key0 = _a[_i];
                        _c = [];
                        for (_d in menu[key0]["categories"])
                            _c.push(_d);
                        _e = 0;
                        _l.label = 14;
                    case 14:
                        if (!(_e < _c.length)) return [3 /*break*/, 24];
                        key1 = _c[_e];
                        return [4 /*yield*/, this.timer(2000)];
                    case 15:
                        _l.sent();
                        return [4 /*yield*/, categoriessheet.addRow({
                                id: menu[key0]["categories"][key1]["id"],
                                nameUA: menu[key0]["categories"][key1]["nameUA"],
                                nameRU: menu[key0]["categories"][key1]["nameRU"],
                                nameENG: menu[key0]["categories"][key1]["nameENG"],
                                descriptoionUA: menu[key0]["categories"][key1]["descriptionUA"],
                                descriptoionRU: menu[key0]["categories"][key1]["descriptionRU"],
                                descriptoionENG: menu[key0]["categories"][key1]["descriptionENG"]
                            })];
                    case 16:
                        _l.sent();
                        _f = 0, _g = menu[key0]["categories"][key1]["categories"];
                        _l.label = 17;
                    case 17:
                        if (!(_f < _g.length)) return [3 /*break*/, 23];
                        productcategories = _g[_f];
                        _h = [];
                        for (_j in productcategories["content"])
                            _h.push(_j);
                        _k = 0;
                        _l.label = 18;
                    case 18:
                        if (!(_k < _h.length)) return [3 /*break*/, 22];
                        productkey = _h[_k];
                        return [4 /*yield*/, this.timer(2000)];
                    case 19:
                        _l.sent();
                        return [4 /*yield*/, productssheet.addRow({
                                nameUA: productcategories["content"][productkey]["nameUA"],
                                nameRU: productcategories["content"][productkey]["nameRU"],
                                nameENG: productcategories["content"][productkey]["nameENG"],
                                id: productcategories["content"][productkey]["id"],
                                descriptionUA: productcategories["content"][productkey]["descriptionUA"],
                                descriptionRU: productcategories["content"][productkey]["descriptionRU"],
                                descriptionENG: productcategories["content"][productkey]["descriptionENG"]
                            })];
                    case 20:
                        newRow = _l.sent();
                        _l.label = 21;
                    case 21:
                        _k++;
                        return [3 /*break*/, 18];
                    case 22:
                        _f++;
                        return [3 /*break*/, 17];
                    case 23:
                        _e++;
                        return [3 /*break*/, 14];
                    case 24:
                        _i++;
                        return [3 /*break*/, 13];
                    case 25: return [2 /*return*/];
                }
            });
        });
    };
    APIRequests.prototype.LoadFromTable = function (corefilename) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, info, productssheet, categoriessheet, rawdata, menu, productROWS, categoriesROWS, key, key0, key1, key, categorieskey, _i, _a, productcategories, productkey, key;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        doc = new GoogleSpreadsheet("1ntYkciirfVkgG2OjIcwBGDwfNfHLlqN2QcX9WVOhGpE");
                        return [4 /*yield*/, doc.useServiceAccountAuth(creds)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, doc.loadInfo()];
                    case 2:
                        info = _b.sent();
                        productssheet = doc.sheetsByIndex[0];
                        categoriessheet = doc.sheetsByIndex[1];
                        rawdata = fs.readFileSync(corefilename);
                        menu = JSON.parse(rawdata);
                        return [4 /*yield*/, productssheet.getRows()];
                    case 3: return [4 /*yield*/, _b.sent()];
                    case 4:
                        productROWS = _b.sent();
                        return [4 /*yield*/, categoriessheet.getRows()];
                    case 5: return [4 /*yield*/, _b.sent()];
                    case 6:
                        categoriesROWS = _b.sent();
                        for (key in productROWS) {
                            // console.log(ROWS[key]["id"])
                        }
                        for (key0 in menu) {
                            for (key1 in menu[key0]["categories"]) {
                                for (key in categoriesROWS) {
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
                                        for (categorieskey in menu[key0]["categories"][key1]["categories"]) {
                                            if (menu[key0]["nameUA"] != "Вино") {
                                                menu[key0]["categories"][key1]["categories"][categorieskey]["id"] = categoriesROWS[key]["id"];
                                                menu[key0]["categories"][key1]["categories"][categorieskey]["nameUA"] = categoriesROWS[key]["nameUA"];
                                                menu[key0]["categories"][key1]["categories"][categorieskey]["nameRU"] = categoriesROWS[key]["nameRU"];
                                                menu[key0]["categories"][key1]["categories"][categorieskey]["nameENG"] = categoriesROWS[key]["nameENG"];
                                                menu[key0]["categories"][key1]["categories"][categorieskey]["descriptionUA"] = categoriesROWS[key]["descriptionUA"];
                                                menu[key0]["categories"][key1]["categories"][categorieskey]["descriptionRU"] = categoriesROWS[key]["descriptionRU"];
                                                menu[key0]["categories"][key1]["categories"][categorieskey]["descriptionENG"] = categoriesROWS[key]["descriptionENG"];
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
                                for (_i = 0, _a = menu[key0]["categories"][key1]["categories"]; _i < _a.length; _i++) {
                                    productcategories = _a[_i];
                                    for (productkey in productcategories["content"]) {
                                        //console.log(productcategories["content"][productkey]["id"])
                                        for (key in productROWS) {
                                            if (productcategories["content"][productkey]["id"] ==
                                                productROWS[key]["id"]) {
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
                        return [2 /*return*/];
                }
            });
        });
    };
    APIRequests.prototype.timer = function (ms) {
        return new Promise(function (res) { return setTimeout(res, ms); });
    };
    APIRequests.prototype.CreateAnswerJSON = function (answerfilename, corefilename, stoplistfilename) {
        return __awaiter(this, void 0, void 0, function () {
            var rawdata, stoplist, menu, answer, MainGroupssortUA, MainGroupssortRU, MainGroupssortENG, CategoriesGroupssortUA, CategoriesGroupssortRU, CategoriesGroupssortENG, productsortUA, productsortRU, productsortENG, key0, key0, key1, key0, key1, _i, _a, productcategories, productkey, key0, helpobj1, key1, helpobj2, IsCorrectTime, timestart, timeend, timenow, now, catalogARR, _b, _c, productcategories, helpobj3, productkey, helpobj4, key0, helpobj1, key1, helpobj2, IsCorrectTime, timestart, timeend, timenow, now, catalogARR, _d, _e, productcategories, helpobj3, productkey, helpobj4, key0, helpobj1, key1, helpobj2, IsCorrectTime, timestart, timeend, timenow, now, catalogARR, _f, _g, productcategories, helpobj3, productkey, helpobj4, i, helpsortobj, i, helpsortobj, i, helpsortobj, i1, i2, sorthelpobj, i1, i2, sorthelpobj, i1, i2, sorthelpobj;
            return __generator(this, function (_h) {
                rawdata = fs.readFileSync(corefilename);
                if (stoplistfilename != undefined) {
                    stoplist = JSON.parse(fs.readFileSync(stoplistfilename));
                }
                else {
                    stoplist = [];
                }
                menu = JSON.parse(rawdata);
                answer = {};
                answer["ua"] = [];
                answer["ru"] = [];
                answer["eng"] = [];
                MainGroupssortUA = {};
                MainGroupssortRU = {};
                MainGroupssortENG = {};
                CategoriesGroupssortUA = {};
                CategoriesGroupssortRU = {};
                CategoriesGroupssortENG = {};
                productsortUA = {};
                productsortRU = {};
                productsortENG = {};
                for (key0 in menu) {
                    if (menu[key0]["nameUA"] != "undefined" && menu[key0]["nameUA"] != undefined) {
                        MainGroupssortUA[menu[key0]["nameUA"]] = parseInt(menu[key0]["tags"]["menuposition"]);
                    }
                    if (menu[key0]["nameRU"] != "undefined" && menu[key0]["nameENG"] != undefined) {
                        MainGroupssortRU[menu[key0]["nameRU"]] = parseInt(menu[key0]["tags"]["menuposition"]);
                    }
                    if (menu[key0]["nameENG"] != "undefined" && menu[key0]["nameENG"] != undefined) {
                        MainGroupssortENG[menu[key0]["nameENG"]] = parseInt(menu[key0]["tags"]["menuposition"]);
                    }
                }
                for (key0 in menu) {
                    for (key1 in menu[key0]["categories"]) {
                        //ua
                        if (menu[key0]["categories"][key1]["nameUA"] != "undefined" && menu[key0]["categories"][key1]["nameUA"] != undefined) {
                            if (menu[key0]["categories"][key1]["tags"]["groupposition"] != undefined) {
                                CategoriesGroupssortUA[menu[key0]["categories"][key1]["nameUA"]] = parseInt(menu[key0]["categories"][key1]["tags"]["groupposition"]);
                            }
                            else {
                                CategoriesGroupssortUA[menu[key0]["categories"][key1]["nameUA"]] = 10000;
                            }
                        }
                        //ru
                        if (menu[key0]["categories"][key1]["nameRU"] != "undefined" && menu[key0]["categories"][key1]["nameRU"] != undefined) {
                            if (menu[key0]["categories"][key1]["tags"]["groupposition"] != undefined) {
                                CategoriesGroupssortRU[menu[key0]["categories"][key1]["nameRU"]] = parseInt(menu[key0]["categories"][key1]["tags"]["groupposition"]);
                            }
                            else {
                                CategoriesGroupssortRU[menu[key0]["categories"][key1]["nameRU"]] = 10000;
                            }
                        }
                        //eng
                        if (menu[key0]["categories"][key1]["nameENG"] != "undefined" && menu[key0]["categories"][key1]["nameENG"] != undefined) {
                            if (menu[key0]["categories"][key1]["tags"]["groupposition"] != undefined) {
                                CategoriesGroupssortENG[menu[key0]["categories"][key1]["nameENG"]] = parseInt(menu[key0]["categories"][key1]["tags"]["groupposition"]);
                            }
                            else {
                                CategoriesGroupssortENG[menu[key0]["categories"][key1]["nameENG"]] = 10000;
                            }
                        }
                    }
                }
                for (key0 in menu) {
                    for (key1 in menu[key0]["categories"]) {
                        for (_i = 0, _a = menu[key0]["categories"][key1]["categories"]; _i < _a.length; _i++) {
                            productcategories = _a[_i];
                            for (productkey in productcategories["content"]) {
                                //console.log(productcategories["content"][productkey]["tags"])
                                //TODO: тут, если надо будет прикрутить сортировку по продуктам
                            }
                        }
                    }
                }
                //UA TODO:
                for (key0 in menu) {
                    helpobj1 = {};
                    helpobj1[menu[key0]["nameUA"]] = [];
                    //helpobj1["tags"]=menu[key0]["tags"]
                    for (key1 in menu[key0]["categories"]) {
                        helpobj2 = {};
                        IsCorrectTime = false;
                        timestart = void 0;
                        timeend = void 0;
                        timenow = void 0;
                        if ((menu[key0]["categories"][key1]["tags"]["timeStart"] != undefined)) {
                            timestart = parseInt(menu[key0]["categories"][key1]["tags"]["timeStart"].split(":")[0]) * 60 + parseInt(menu[key0]["categories"][key1]["tags"]["timeStart"].split(":")[1]);
                        }
                        else {
                            timestart = 0;
                        }
                        if ((menu[key0]["categories"][key1]["tags"]["timeEnd"] != undefined)) {
                            timeend = parseInt(menu[key0]["categories"][key1]["tags"]["timeEnd"].split(":")[0]) * 60 + parseInt(menu[key0]["categories"][key1]["tags"]["timeEnd"].split(":")[1]);
                        }
                        else {
                            timeend = 1440;
                        }
                        now = moment();
                        timenow = parseInt(now.format('HH')) * 60 + parseInt(now.format('mm'));
                        IsCorrectTime = ((timestart <= timenow) && (timenow <= timeend));
                        if (menu[key0]["categories"][key1]["nameUA"] != undefined && IsCorrectTime) {
                            helpobj2["id"] = menu[key0]["categories"][key1]["id"];
                            catalogARR = [];
                            for (_b = 0, _c = menu[key0]["categories"][key1]["categories"]; _b < _c.length; _b++) {
                                productcategories = _c[_b];
                                helpobj3 = {};
                                helpobj3["name"] = productcategories["nameUA"];
                                helpobj3["description"] = productcategories["descriptionUA"];
                                helpobj3["type"] = productcategories["type"];
                                helpobj3["content"] = [];
                                //CONTENT
                                for (productkey in productcategories["content"]) {
                                    helpobj4 = {};
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
                                    if (helpobj4["name"] != "undefined" && helpobj4["name"] != undefined && !(stoplist.includes(helpobj4["id"]))) {
                                        helpobj3["content"].push(helpobj4);
                                    }
                                }
                                if (helpobj3["name"] != "undefined" && helpobj3["name"] != undefined) {
                                    catalogARR.push(helpobj3);
                                }
                            }
                            //console.log(helpobj2)
                            helpobj2[menu[key0]["categories"][key1]["nameUA"]] = {
                                catalog: catalogARR
                            };
                            helpobj1[menu[key0]["nameUA"]].push(helpobj2);
                        }
                    }
                    answer["ua"].push(helpobj1);
                    //console.log(menu[key0]["nameUA"])
                }
                //RU TODO:
                for (key0 in menu) {
                    helpobj1 = {};
                    helpobj1[menu[key0]["nameRU"]] = [];
                    //helpobj1["tags"]=menu[key0]["tags"]
                    for (key1 in menu[key0]["categories"]) {
                        helpobj2 = {};
                        IsCorrectTime = false;
                        timestart = void 0;
                        timeend = void 0;
                        timenow = void 0;
                        if ((menu[key0]["categories"][key1]["tags"]["timeStart"] != undefined)) {
                            timestart = parseInt(menu[key0]["categories"][key1]["tags"]["timeStart"].split(":")[0]) * 60 + parseInt(menu[key0]["categories"][key1]["tags"]["timeStart"].split(":")[1]);
                        }
                        else {
                            timestart = 0;
                        }
                        if ((menu[key0]["categories"][key1]["tags"]["timeEnd"] != undefined)) {
                            timeend = parseInt(menu[key0]["categories"][key1]["tags"]["timeEnd"].split(":")[0]) * 60 + parseInt(menu[key0]["categories"][key1]["tags"]["timeEnd"].split(":")[1]);
                        }
                        else {
                            timeend = 1440;
                        }
                        now = moment();
                        timenow = parseInt(now.format('HH')) * 60 + parseInt(now.format('mm'));
                        IsCorrectTime = ((timestart <= timenow) && (timenow <= timeend));
                        if (menu[key0]["categories"][key1]["nameRU"] != undefined && IsCorrectTime) {
                            helpobj2["id"] = menu[key0]["categories"][key1]["id"];
                            catalogARR = [];
                            for (_d = 0, _e = menu[key0]["categories"][key1]["categories"]; _d < _e.length; _d++) {
                                productcategories = _e[_d];
                                helpobj3 = {};
                                helpobj3["name"] = productcategories["nameRU"];
                                helpobj3["description"] = productcategories["descriptionRU"];
                                helpobj3["type"] = productcategories["type"];
                                helpobj3["content"] = [];
                                //CONTENT
                                for (productkey in productcategories["content"]) {
                                    helpobj4 = {};
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
                                    if (helpobj4["name"] != "undefined" && helpobj4["name"] != undefined && !(stoplist.includes(helpobj4["id"]))) {
                                        helpobj3["content"].push(helpobj4);
                                    }
                                }
                                if (helpobj3["name"] != "undefined" && helpobj3["name"] != undefined) {
                                    catalogARR.push(helpobj3);
                                }
                            }
                            //console.log(helpobj2)
                            helpobj2[menu[key0]["categories"][key1]["nameRU"]] = {
                                catalog: catalogARR
                            };
                            helpobj1[menu[key0]["nameRU"]].push(helpobj2);
                        }
                    }
                    answer["ru"].push(helpobj1);
                    //console.log(menu[key0]["nameUA"])
                }
                //ENG TODO:
                for (key0 in menu) {
                    helpobj1 = {};
                    helpobj1[menu[key0]["nameENG"]] = [];
                    // helpobj1["tags"]=menu[key0]["tags"]
                    for (key1 in menu[key0]["categories"]) {
                        helpobj2 = {};
                        IsCorrectTime = false;
                        timestart = void 0;
                        timeend = void 0;
                        timenow = void 0;
                        if ((menu[key0]["categories"][key1]["tags"]["timeStart"] != undefined)) {
                            timestart = parseInt(menu[key0]["categories"][key1]["tags"]["timeStart"].split(":")[0]) * 60 + parseInt(menu[key0]["categories"][key1]["tags"]["timeStart"].split(":")[1]);
                        }
                        else {
                            timestart = 0;
                        }
                        if ((menu[key0]["categories"][key1]["tags"]["timeEnd"] != undefined)) {
                            timeend = parseInt(menu[key0]["categories"][key1]["tags"]["timeEnd"].split(":")[0]) * 60 + parseInt(menu[key0]["categories"][key1]["tags"]["timeEnd"].split(":")[1]);
                        }
                        else {
                            timeend = 1440;
                        }
                        now = moment();
                        timenow = parseInt(now.format('HH')) * 60 + parseInt(now.format('mm'));
                        IsCorrectTime = ((timestart <= timenow) && (timenow <= timeend));
                        if (menu[key0]["categories"][key1]["nameENG"] != undefined && IsCorrectTime) {
                            helpobj2["id"] = menu[key0]["categories"][key1]["id"];
                            catalogARR = [];
                            for (_f = 0, _g = menu[key0]["categories"][key1]["categories"]; _f < _g.length; _f++) {
                                productcategories = _g[_f];
                                helpobj3 = {};
                                helpobj3["name"] = productcategories["nameENG"];
                                helpobj3["description"] = productcategories["descriptionENG"];
                                helpobj3["type"] = productcategories["type"];
                                helpobj3["content"] = [];
                                //CONTENT
                                for (productkey in productcategories["content"]) {
                                    helpobj4 = {};
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
                                    if (helpobj4["name"] != "undefined" && helpobj4["name"] != undefined && !(stoplist.includes(helpobj4["id"]))) {
                                        helpobj3["content"].push(helpobj4);
                                    }
                                }
                                if (helpobj3["name"] != "undefined" && helpobj3["name"] != undefined) {
                                    catalogARR.push(helpobj3);
                                }
                            }
                            //console.log(helpobj2)
                            helpobj2[menu[key0]["categories"][key1]["nameENG"]] = {
                                catalog: catalogARR
                            };
                            helpobj1[menu[key0]["nameENG"]].push(helpobj2);
                        }
                    }
                    answer["eng"].push(helpobj1);
                    //console.log(menu[key0]["nameUA"])
                }
                for (i = 0; i < answer["ua"].length - 1; i++) {
                    if (MainGroupssortUA[Object.keys(answer["ua"][i])[0]] > MainGroupssortUA[Object.keys(answer["ua"][i + 1])[0]]) {
                        helpsortobj = answer["ua"][i];
                        answer["ua"][i] = answer["ua"][i + 1];
                        answer["ua"][i + 1] = helpsortobj;
                        i = -1;
                    }
                }
                for (i = 0; i < answer["ru"].length - 1; i++) {
                    if (MainGroupssortRU[Object.keys(answer["ru"][i])[0]] > MainGroupssortRU[Object.keys(answer["ru"][i + 1])[0]]) {
                        helpsortobj = answer["ru"][i];
                        answer["ru"][i] = answer["ru"][i + 1];
                        answer["ru"][i + 1] = helpsortobj;
                        i = -1;
                    }
                }
                for (i = 0; i < answer["eng"].length - 1; i++) {
                    if (MainGroupssortENG[Object.keys(answer["eng"][i])[0]] > MainGroupssortENG[Object.keys(answer["eng"][i + 1])[0]]) {
                        helpsortobj = answer["eng"][i];
                        answer["eng"][i] = answer["eng"][i + 1];
                        answer["eng"][i + 1] = helpsortobj;
                        i = -1;
                    }
                }
                //UA
                for (i1 = 0; i1 < answer["ua"].length; i1++) {
                    for (i2 = 0; i2 < answer["ua"][i1][Object.keys(answer["ua"][i1])[0]].length - 1; i2++) {
                        if (CategoriesGroupssortUA[Object.keys(answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2])[1]] > CategoriesGroupssortUA[Object.keys(answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2 + 1])[1]]) {
                            sorthelpobj = answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2];
                            answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2] = answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2 + 1];
                            answer["ua"][i1][Object.keys(answer["ua"][i1])[0]][i2 + 1] = sorthelpobj;
                            i2 = -1;
                        }
                    }
                }
                //RU
                for (i1 = 0; i1 < answer["ru"].length; i1++) {
                    for (i2 = 0; i2 < answer["ru"][i1][Object.keys(answer["ru"][i1])[0]].length - 1; i2++) {
                        if (CategoriesGroupssortRU[Object.keys(answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2])[1]] > CategoriesGroupssortRU[Object.keys(answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2 + 1])[1]]) {
                            sorthelpobj = answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2];
                            answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2] = answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2 + 1];
                            answer["ru"][i1][Object.keys(answer["ru"][i1])[0]][i2 + 1] = sorthelpobj;
                            i2 = -1;
                        }
                    }
                }
                //ENG
                for (i1 = 0; i1 < answer["eng"].length; i1++) {
                    for (i2 = 0; i2 < answer["eng"][i1][Object.keys(answer["eng"][i1])[0]].length - 1; i2++) {
                        if (CategoriesGroupssortENG[Object.keys(answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2])[1]] > CategoriesGroupssortENG[Object.keys(answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2 + 1])[1]]) {
                            sorthelpobj = answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2];
                            answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2] = answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2 + 1];
                            answer["eng"][i1][Object.keys(answer["eng"][i1])[0]][i2 + 1] = sorthelpobj;
                            i2 = -1;
                        }
                    }
                }
                fs.writeFileSync(answerfilename, JSON.stringify(answer));
                return [2 /*return*/];
            });
        });
    };
    APIRequests.prototype.CreateStoplistJSON = function (stoplist, stoplistfilename) {
        return __awaiter(this, void 0, void 0, function () {
            var answer, _i, _a, element;
            return __generator(this, function (_b) {
                answer = [];
                for (_i = 0, _a = stoplist["stopList"][0]["items"]; _i < _a.length; _i++) {
                    element = _a[_i];
                    //console.log(element['productId'])
                    answer.push(element['productId']);
                }
                //console.log( JSON.stringify(answer))
                //console.log(JSON.parse( JSON.stringify(answer)))
                fs.writeFileSync(stoplistfilename, JSON.stringify(answer));
                return [2 /*return*/];
            });
        });
    };
    return APIRequests;
}());
exports.APIRequests = APIRequests;
