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
exports.router = void 0;
var express = require("express");
var reservation_1 = require("../dist/reservation");
var restaurant_1 = require("./restaurant");
var router = express.Router();
exports.router = router;
router.get("/restaurant", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, restaurant_1.restaurant.findAll()];
            case 1:
                data = _a.sent();
                res.status(200).json(data);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                res.status(500).json({ message: "Something wrong" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var request, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                request = req.body;
                console.log(request);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, restaurant_1.restaurant.create(request["name"], request["connection"], request["location"], 0, 0, request["money_cost"], request["time_avaliable"], request["cusine"], request["people"])];
            case 2:
                _a.sent();
                res.status(200).json({ message: "creation successful" });
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                res.status(500).json({ message: "Something wrong" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*restaurant_id:string,name: string, connection: string, date:String,time:string
// reservation request: name conteaction, date, time
*/
router.post("/:id/reservation", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var request, id, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                request = req.body;
                if (request["name"] == null || request["comment"] == null)
                    throw "";
                id = req.params.id;
                return [4 /*yield*/, reservation_1.reservation.create(id, request["name"], request["connnection"], request["time"])];
            case 1:
                _a.sent();
                return [4 /*yield*/, restaurant_1.restaurant.updateTime(id, request["time"])];
            case 2:
                _a.sent();
                res.status(200).json({ message: "creat successful" });
                return [3 /*break*/, 4];
            case 3:
                e_3 = _a.sent();
                res.status(500).json({ message: "something wrong" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post("/:id/rate", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var request, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                request = req.body;
                return [4 /*yield*/, restaurant_1.restaurant.updateRate(req.params.id, request["rate"])];
            case 1:
                _a.sent();
                res.status(200).json({ message: "creat successful" });
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                res.status(500).json({ message: "something wrong" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/name", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var request, data, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                request = req.body;
                return [4 /*yield*/, restaurant_1.restaurant.findName(request["name"])];
            case 1:
                data = _a.sent();
                res.status(200).json(data);
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                res.status(500).json({ message: "something wrong" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/money", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var request, data, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                request = req.body;
                return [4 /*yield*/, restaurant_1.restaurant.findMoney(request["money"])];
            case 1:
                data = _a.sent();
                res.status(200).json(data);
                return [3 /*break*/, 3];
            case 2:
                e_6 = _a.sent();
                res.status(500).json({ message: "something wrong" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/people", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var request, data, e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                request = req.body;
                return [4 /*yield*/, restaurant_1.restaurant.findPeople(request["people"])];
            case 1:
                data = _a.sent();
                res.status(200).json(data);
                return [3 /*break*/, 3];
            case 2:
                e_7 = _a.sent();
                res.status(500).json({ message: "something wrong" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, e_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, restaurant_1.restaurant.find(req.params.id)];
            case 1:
                data = _a.sent();
                if (data.length == 0) {
                    res.status(200).json({ message: "Not found with this id" });
                }
                else {
                    delete data[0]._id;
                    res.status(200).json(data[0]);
                }
                return [3 /*break*/, 3];
            case 2:
                e_8 = _a.sent();
                res.status(500).json({ message: "Something wrong" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
