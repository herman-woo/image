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
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var search = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var name, ext, image_1, files, result, error_1, error_2, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = req.query.filename;
                if (!name) return [3 /*break*/, 16];
                ext = 'ext';
                if (req.query.ext === undefined) {
                    //if no ext was defined
                    ext = '.jpg'; //set jpg as default extention
                }
                else {
                    ext = "." + req.query.ext; //if ext key was used, set the extention to the key
                }
                image_1 = (name + ext);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 14, , 15]);
                return [4 /*yield*/, fs_1.promises.readdir('src/imgs/full')];
            case 2:
                files = _a.sent();
                result = files.find(function (file) { return file === image_1; });
                if (!result) return [3 /*break*/, 12];
                // if image exists
                res.locals.image = image_1; //set a value to be passed on in response.locals
                _a.label = 3;
            case 3:
                _a.trys.push([3, 5, , 11]);
                //const thumbs =
                return [4 /*yield*/, fs_1.promises.readdir('src/imgs/thumbs')];
            case 4:
                //const thumbs =
                _a.sent(); //check thumbs folder to see if image exists
                //const convertExists = thumbs.find((thumb) => thumb === `${name}.jpg`);
                /*if (convertExists) {
                  //if the file exists in the folder exists:
                  console.log(`A Converted ${name}.jpg file already exists`);
                    res.send(
                    //serve the existing file
                    `<div>Converted ${image} file exists</div><img src="http://localhost:3000/imgs/thumbs/${name}.jpg"></img>`
                  );
                } else {
                  console.log(`Coverting ${image}...`);
                  next(); //If thumbs file exists && current image name cannot be found in the folder, run convert script
                }
                */
                console.log("Coverting " + image_1 + "...");
                next(); //If thumbs file exists && current image name cannot be found in the folder, run convert script
                return [3 /*break*/, 11];
            case 5:
                error_1 = _a.sent();
                _a.label = 6;
            case 6:
                _a.trys.push([6, 9, , 10]);
                return [4 /*yield*/, fs_1.promises.mkdir('src/imgs/thumbs')];
            case 7:
                _a.sent(); //create the folder
                return [4 /*yield*/, fs_1.promises.readdir('src/imgs/thumbs')];
            case 8:
                _a.sent();
                console.log('Created new Thumbs folder,', "Coverting " + image_1 + "...");
                next(); //since there was no thumbs folder, that means no thumbs existsed prior, clearing it up to be converted.
                return [3 /*break*/, 10];
            case 9:
                error_2 = _a.sent();
                console.log('Could not Create new thumbs folder');
                res.send('No Output Directory');
                return [3 /*break*/, 10];
            case 10: return [3 /*break*/, 11];
            case 11: return [3 /*break*/, 13];
            case 12:
                console.log('Search Result: No Image Found');
                res.send('Error: No Image Found');
                _a.label = 13;
            case 13: return [3 /*break*/, 15];
            case 14:
                error_3 = _a.sent();
                res.send('Failed to get images');
                return [3 /*break*/, 15];
            case 15: return [3 /*break*/, 17];
            case 16:
                res.send('Error: No filename requested');
                _a.label = 17;
            case 17: return [2 /*return*/];
        }
    });
}); };
exports.default = search;
