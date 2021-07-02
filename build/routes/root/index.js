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
    res.send("<h1>Image Processing API</h1>\n    <h2>Available Files:</h2>\n    <ol>\n      <li>http://localhost:3000/imgs/full/toronto.jpg</li>\n      <li><button>home</button></li>\n      <li><button>ps3</button></li>\n      <li><button>AC Origins</button></li>\n    </ol>\n    <h2>Resize:</h2>\n    <div><h3>File:<input></h3>Height<input> Width<input></div>\n    <div><button>Convert!</button></div>\n  ");
});
exports.default = root;
