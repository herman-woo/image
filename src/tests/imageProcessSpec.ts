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
      'src/imgs/thumbs/',
      'toronto.jpg'
    );
    expect(result).toEqual("Image Processed");
  });
  it('Invalid Input Path throws error', async () => {
    const result = await imageProcess(
      'invalid.path',
      200,
      200,
      'src/imgs/thumbs/',
      'toronto.jpg'
    );
    expect(result).toEqual("Unable to Process Input");
  });
  it('Invalid Output Path throws error', async () => {
    const result = await imageProcess(
      'src/imgs/full/toronto.jpg',
      200,
      200,
      'invalid.path',
      'toronto.jpg'
    );
    expect(result).toEqual("No output directory found");
  });
});
