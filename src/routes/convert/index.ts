//import NPM modules
import express from 'express';
import { promises as fs } from 'fs';
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
    const input = `src/imgs/full/${res.locals.fullImage}`;
    const outputDir = 'src/imgs/thumbs/';
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
    const newFile = `${req.query.filename}${width}x${height}.jpg`;
    try {
      const thumbs = await fs.readdir(outputDir);
      const cache = thumbs.find((thumb) => thumb === newFile);
      if (cache) {
        console.log('Existing File found:', cache, '. Serving cached photo');
        result += `<h3>cached - ${width}x${height}</h3><img src="/imgs/thumbs/${newFile}"></img>`;
        res.send(result);
      } else {
        console.log('No thumb found, converting new photo');
        try {
          await imageProcess(input, width, height, outputDir, newFile);
          console.log(`...done: @/imgs/thumbs/${newFile}`);
          result += `<h3>converted - ${width}x${height}</h3><img src="/imgs/thumbs/${newFile}"></img>`;
          res.send(result);
        } catch (error) {
          console.log('Invalid argument', error);
          res.send('Failed to Process Image');
        }
      }
    } catch (error) {
      console.log('no thumbs directory');
    }
  }
);

export default convert;
