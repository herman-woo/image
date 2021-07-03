//import NPM modules
import express from 'express';
//import middleware
import search from '../../utilities/search';
import imageProcess from '../../utilities/imageProcess';
//import function
import checkKey from '../../utilities/checkKey';

const convert = express.Router();

convert.get(
  '/',
  search,
  async (req: express.Request, res: express.Response): Promise<void> => {
    const widthData = req.query.width as unknown as string; //Use type assertion on default value from key
    const heightData = req.query.height as unknown as string;
    const input = `src/imgs/full/${res.locals.image}`;
    const newFile = `${req.query.filename}.jpg`;
    const output = 'src/imgs/thumbs/' + newFile;
    let result = '';
    const updateResult = (update: string): void => {
      result += update;
    };

    const getSize = (
      checkedKey: string | number,
      defaultSize: number
    ): number => {
      if (typeof checkedKey === 'number') {
        return checkedKey;
      } else {
        updateResult(checkedKey);
        return defaultSize;
      }
    };

    const width = getSize(checkKey(widthData, 'width'), 200);
    const height = getSize(checkKey(heightData, 'height'), 200);
    try {
      await imageProcess(input, width, height, output);
      console.log(`...done: @http://localhost:3000/imgs/thumbs/${newFile}`);
      result += `<h2>converted - ${width}x${height}</h2><img src="http://localhost:3000/imgs/thumbs/${newFile}"></img>`;
      res.send(result);
    } catch (error) {
      console.log('Invalid argument', error);
      res.send('Failed to Process Image');
    }
  }
);

export default convert;
