//Testing Sharp Image Processing

//import sharp from 'sharp';
import imageProcess from '../utilities/imageProcess';

//setup a suite for testing
describe('Functionality Testing for Sharp Middleware', () => {
  it('Successfully Converts an image', async () => {
    const result = await imageProcess(
      'src/tests/imgsSpec/fullSpec/test1.jpg',
      200,
      200,
      'src/tests/imgsSpec/thumbsSpec/',
      'test1.jpg'
    );
    expect(result).toEqual('Image Processed');
  });
  it('Invalid Input Path throws error', async () => {
    const result = await imageProcess(
      'invalid.path',
      200,
      200,
      'src/tests/imgsSpec/thumbsSpec/',
      'test2.jpg'
    );
    expect(result).toEqual('Unable to Process Input');
  });
  it('Invalid Output Path throws error', async () => {
    const result = await imageProcess(
      'src/tests/imgsSpec/fullSpec/test2.jpg',
      200,
      200,
      'invalid.path',
      'test2.jpg'
    );
    expect(result).toEqual('No output directory found');
  });
  /*
  it('Output File exists', async () => {
    const result = await imageProcess(
      'src/tests/imgsSpec/fullSpec/test1.jpg',
      200,
      200,
      'src/tests/imgsSpec/thumbsSpec/',
      'test1.jpg'
    );
    expect(result).toEqual('File already exists');
  });
  */
});
