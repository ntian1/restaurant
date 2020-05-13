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
exports.restaurant = void 0;
var mongodb = require("mongodb");
var client = mongodb.MongoClient;
var uuid_1 = require("uuid");
var restaurant = /** @class */ (function () {
    function restaurant() {
    }
    restaurant.create = function (name, connection, location, rate, rate_number, money_cost, time_avaliable, cusine, people) {
        return __awaiter(this, void 0, void 0, function () {
            var db, id, collection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.connect(this.url)];
                    case 1:
                        db = _a.sent();
                        id = uuid_1.v4();
                        collection = db.db("CS554-G2-Final").collection("restaurant");
                        return [4 /*yield*/, collection.insert({ id: id, name: name, connection: connection, location: location, rate: rate, rate_number: rate_number, money_cost: money_cost,
                                time_avaliable: time_avaliable, cusine: cusine, people: people })];
                    case 2:
                        _a.sent();
                        db.close();
                        return [2 /*return*/, this.find(id)];
                }
            });
        });
    };
    restaurant.find = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var db, collection, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.connect(this.url)];
                    case 1:
                        db = _a.sent();
                        collection = db.db("CS554-G2-Final").collection("restaurant");
                        return [4 /*yield*/, collection.find({ "id": id }).toArray()];
                    case 2:
                        res = _a.sent();
                        db.close();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    restaurant.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db, collection, res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, client.connect(this.url)];
                    case 1:
                        db = _a.sent();
                        collection = db.db("Tian-Nianqi-CS554-Lab1").collection("task");
                        return [4 /*yield*/, collection.find({}).toArray()];
                    case 2:
                        res = _a.sent();
                        db.close();
                        return [2 /*return*/, res];
                    case 3:
                        e_1 = _a.sent();
                        console.log("something went wrong");
                        return [2 /*return*/, e_1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    restaurant.findName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var db, collection, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.connect(this.url)];
                    case 1:
                        db = _a.sent();
                        collection = db.db("CS554-G2-Final").collection("restaurant");
                        return [4 /*yield*/, collection.find({ "name": name }).toArray()];
                    case 2:
                        res = _a.sent();
                        db.close();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    restaurant.findLocation = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var db, collection, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.connect(this.url)];
                    case 1:
                        db = _a.sent();
                        collection = db.db("CS554-G2-Final").collection("restaurant");
                        return [4 /*yield*/, collection.find({ "location": location }).toArray()];
                    case 2:
                        res = _a.sent();
                        db.close();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    restaurant.updateRate = function (id, newRate) {
        return __awaiter(this, void 0, void 0, function () {
            var db, collection, res, rate_number, rate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.connect(this.url)];
                    case 1:
                        db = _a.sent();
                        collection = db.db("CS554-G2-Final").collection("restaurant");
                        return [4 /*yield*/, collection.find({ "id": id })];
                    case 2:
                        res = _a.sent();
                        rate_number = res["rate_number"] + 1;
                        rate = (res["rate"] * res["rate_number"] + newRate) / rate_number;
                        return [4 /*yield*/, collection.update({ "id": id }, { $set: { "rate": rate, "rate_number": rate_number } })];
                    case 3:
                        _a.sent();
                        db.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    restaurant.findMoney = function (money_cost) {
        return __awaiter(this, void 0, void 0, function () {
            var db, collection, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.connect(this.url)];
                    case 1:
                        db = _a.sent();
                        collection = db.db("CS554-G2-Final").collection("restaurant");
                        return [4 /*yield*/, collection.find({ "money_cost": money_cost }).toArray()];
                    case 2:
                        res = _a.sent();
                        db.close();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    restaurant.findCusine = function (cusine) {
        return __awaiter(this, void 0, void 0, function () {
            var db, collection, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.connect(this.url)];
                    case 1:
                        db = _a.sent();
                        collection = db.db("CS554-G2-Final").collection("restaurant");
                        return [4 /*yield*/, collection.find({ "cusine": cusine }).toArray()];
                    case 2:
                        res = _a.sent();
                        db.close();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    restaurant.findPeople = function (people) {
        return __awaiter(this, void 0, void 0, function () {
            var db, collection, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.connect(this.url)];
                    case 1:
                        db = _a.sent();
                        collection = db.db("CS554-G2-Final").collection("restaurant");
                        return [4 /*yield*/, collection.find({ "people": people }).toArray()];
                    case 2:
                        res = _a.sent();
                        db.close();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    restaurant.updateTime = function (id, time) {
        return __awaiter(this, void 0, void 0, function () {
            var db, collection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.connect(this.url)];
                    case 1:
                        db = _a.sent();
                        collection = db.db("CS554-G2-Final").collection("restaurant");
                        return [4 /*yield*/, collection.update({ "id": id }, { $set: { "time": time } })];
                    case 2:
                        _a.sent();
                        db.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    restaurant.url = "mongodb://127.0.0.1:27017/";
    return restaurant;
}());
exports.restaurant = restaurant;
