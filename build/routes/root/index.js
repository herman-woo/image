"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Route Setup
var express_1 = __importDefault(require("express"));
var root = express_1.default.Router();
//Import Paths
var index_1 = __importDefault(require("../convert/index"));
root.use('/convert', index_1.default);
root.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send("<h1>Image Processing API</h1>\n    <h2>Available Files:</h2>\n    <ol>\n      <li><a href=\"/imgs/full/egypt.jpeg\">egypt.jpeg</a></li>\n      <li><a href=\"/imgs/full/encenadaport.jpg\">encenadaport.jpg</a></li>\n      <li><a href=\"/imgs/full/fjord.jpg\">fjord.jpg</a></li>\n      <li><a href=\"/imgs/full/home.jpg\">home.jpg</a></li>\n      <li><a href=\"/imgs/full/icelandwaterfall.jpg\">icelandwaterfall.jpg</a></li>\n      <li><a href=\"/imgs/full/palmtunnel.jpg\">palmtunnel.jpg</a></li>\n      <li><a href=\"/imgs/full/ps3.jpg\">ps3.jpg</a></li>\n      <li><a href=\"/imgs/full/santamonica.jpg\">santamonica.jpg</a></li>\n      <li><a href=\"/imgs/full/toronto.jpg\">toronto.jpg</a></li>\n    </ol>\n    <h2>Keys:</h2>\n    <ul>\n      <li>filename - use any filename on the available list, do not use extention</li>\n      <li>(optional)ext - default extention is jpg, if the original file is not jpg, must specify the extention here, example egypt.jpeg use ext=jpeg</li>\n      <li>(optional)width - desired width dimention to convert to, default value is 200</li>\n      <li>(optional)height - desired height dimention to convert to, default value is 200</li>\n    </ul>\n    <h3>Example 1: <a href=\"/convert/?filename=toronto&width=200&height=200\">/convert/?filename=toronto&width=200&height=200</a>(Success)</h3>\n    <h3>Example 2: <a href=\"/convert/?filename=egypt&ext=jpeg\">/convert/?filename=egypt&ext=jpeg</a>(Success)</h3>\n    <h3>Example 3: <a href=\"/convert/?filename=\">/convert/?filename=</a>(No Image Found)</h3>\n  ");
});
exports.default = root;
