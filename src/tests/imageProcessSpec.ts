//Testing Sharp Image Processing

//import sharp from 'sharp';
import imageProcess from '../utilities/imageProcess';

//setup a suite for testing
describe('Functionality Testing for Sharp Middleware', () => {
  it('Successfully Converts an image', async () => {
    const result = await imageProcess(
      'src/imgs/full/toronto.jpg',
      200,
      200,
      'src/imgs/thumbs/toronto.jpg'
    );
    expect(result).toEqual();
  });
});
