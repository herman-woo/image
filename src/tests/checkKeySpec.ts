//Testing Sharp Image Processing

//import sharp from 'sharp';
import checkKey from '../utilities/checkKey';
const realNumber = '500';
const invalidNumber = '543kjh35';
const stringKey = 'string';

//setup a suite for testing
describe('Testing functionality of Key checker', () => {
  it('Successfully returns key Value', () => {
    expect(checkKey(realNumber, 'width')).toEqual(500);
  });
  it('Improper Key returns String', () => {
    expect(checkKey(invalidNumber, 'width')).toEqual(
      '<h5>Mixed characters and numbers in width key, default value used = 200</h5>'
    );
  });
  it('String Key returns String', () => {
    expect(checkKey(stringKey, 'width')).toEqual(
      '<h5>Invalid width key, default value used = 200</h5>'
    );
  });
});
