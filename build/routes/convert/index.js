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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import NPM modules
var express_1 = __importDefault(require("express"));
var fs_1 = require("fs");
//import middleware
var search_1 = __importDefault(require("../../utilities/search"));
var imageProcess_1 = __importDefault(require("../../utilities/imageProcess"));
//import function
var checkKey_1 = __importDefault(require("../../utilities/checkKey"));
var convert = express_1.default.Router();
convert.get('/', search_1.default, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var widthData, heightData, input, outputDir, result, updateResult, getSize, width, height, newFile, thumbs, cache, error_1, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                widthData = req.query.width;
                heightData = req.query.height;
                input = "src/imgs/full/" + res.locals.fullImage;
                outputDir = 'src/imgs/thumbs/';
                result = '';
                updateResult = function (update) {
                    result += update;
                };
                getSize = function (checkedKey, defaultSize) {
                    if (typeof checkedKey === 'number') {
                        return checkedKey;
                    }
                    else {
                        updateResult(checkedKey);
                        return defaultSize;
                    }
                };
                width = getSize(checkKey_1.default(widthData, 'width'), 200);
                height = getSize(checkKey_1.default(heightData, 'height'), 200);
                newFile = "" + req.query.filename + width + "x" + height + ".jpg";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                return [4 /*yield*/, fs_1.promises.readdir(outputDir)];
            case 2:
                thumbs = _a.sent();
                cache = thumbs.find(function (thumb) { return thumb === newFile; });
                if (!cache) return [3 /*break*/, 3];
                console.log('Existing File found:', cache, '. Serving cached photo');
                result += "<h3>cached - " + width + "x" + height + "</h3><img src=\"/imgs/thumbs/" + newFile + "\"></img>";
                res.send(result);
                return [3 /*break*/, 7];
            case 3:
                console.log('No thumb found, converting new photo');
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, imageProcess_1.default(input, width, height, outputDir, newFile)];
            case 5:
                _a.sent();
                console.log("...done: @/imgs/thumbs/" + newFile);
                result += "<h3>converted - " + width + "x" + height + "</h3><img src=\"/imgs/thumbs/" + newFile + "\"></img>";
                res.send(result);
                return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                console.log('Invalid argument', error_1);
                res.send('Failed to Process Image');
                return [3 /*break*/, 7];
            case 7: return [3 /*break*/, 9];
            case 8:
                error_2 = _a.sent();
                console.log('no thumbs directory');
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
exports.default = convert;
