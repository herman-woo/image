"use strict";
//Testing Sharp Image Processing
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import sharp from 'sharp';
var checkKey_1 = __importDefault(require("../utilities/checkKey"));
var realNumber = '500';
var invalidNumber = '543kjh35';
var stringKey = 'string';
//setup a suite for testing
describe('Testing functionality of Key checker', function () {
    it('Successfully returns key Value', function () {
        expect(checkKey_1.default(realNumber, 'width')).toEqual(500);
    });
    it('Improper Key returns String', function () {
        expect(checkKey_1.default(invalidNumber, 'width')).toEqual('<h5>Mixed characters and numbers in width key, default value used = 200</h5>');
    });
    it('String Key returns String', function () {
        expect(checkKey_1.default(stringKey, 'width')).toEqual('<h5>Invalid width key, default value used = 200</h5>');
    });
});
