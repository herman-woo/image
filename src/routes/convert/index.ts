//import NPM modules
import express from 'express';
//import middleware
import search from '../../utilities/search';
import imageProcess from '../../utilities/imageProcess';

const convert = express.Router();
convert.get('/', search, async (req, res) => {
  const widthdata = req.query.width as string;
  const heightdata = req.query.height as string;
  const input = `src/imgs/full/${res.locals.image}`;
  const outputPath = 'src/imgs/thumbs/';
  const newFile = `${req.query.filename}.jpg`;
  const output = outputPath + newFile;
  let width = 200;
  let height = 200;
  if (widthdata !== undefined) {
    width = parseInt(widthdata);
  }
  if (heightdata !== undefined) {
    height = parseInt(heightdata);
  }
  await imageProcess(input, width, height, output);
  console.log('...done');
  res.send(
    `<h2>converted - ${width}x${height}</h2><img src="http://localhost:3000/imgs/thumbs/${newFile}"></img>`
  );
});

export default convert;
