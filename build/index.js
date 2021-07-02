"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import Express
var express_1 = __importDefault(require("express"));
//import Routes
var index_1 = __importDefault(require("./routes/root/index"));
//Server Specs
var app = express_1.default(); //Create express server object
var port = 3000;
app.use(express_1.default.static('src'));
//Routes
app.use('/', index_1.default); //Root Route
//Server Listening from Port
app.listen(port, function () {
    console.log("Image Processing App - Server Listening @ port:" + port);
});
