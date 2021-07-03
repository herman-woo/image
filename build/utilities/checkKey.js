"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Function to check the value of height/weight key and return a string or number
var checkKey = function (oldValue, type) {
    var newValue = parseInt(oldValue);
    var html = '';
    if (isNaN(newValue)) {
        //if key entered is not a number, value will be true
        if (oldValue === undefined) {
            //if value is undefined, notify user
            html += "<h5>No " + type + " entered, default value used 200</h5>";
            return html;
        }
        else {
            //else a string was entered
            html += "<h5>Invalid " + type + " key, default value used = 200</h5>";
            return html;
        }
    }
    else {
        if (newValue.toString() !== oldValue) {
            html += "<h5>Mixed characters and numbers in " + type + " key, default value used = 200</h5>";
            return html;
        }
        else {
            return newValue;
        }
    }
};
exports.default = checkKey;
