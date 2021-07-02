//this file is middleware to ensure the requested file exists
import express from 'express';
import { promises as fs } from 'fs';

const search = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  const name = req.query.filename; //get filename from req
  if (name) {
    let ext = 'ext';
    if (req.query.ext === undefined) {
      ext = '.jpg';
    } else {
      ext = `.${req.query.ext}`;
    }
    const image = (name + ext) as string;
    const files = await fs.readdir('src/imgs/full');
    const result = files.find((file) => file === image);
    if (result) {
      res.locals.image = image;
      const newFiles = await fs.readdir('src/imgs/thumbs');
      const existNew = newFiles.find((file) => file === `${name}.jpg`);
      if (existNew) {
        console.log('A Converted', existNew, 'file already exists');
        res.send(
          `<div>Converted File Exists</div><img src="http://localhost:3000/imgs/thumbs/${name}.jpg"></img>`
        );
      } else {
        console.log('Coverting...');
        next();
      }
    } else {
      console.log('Search Result: No Image Found');
      res.send('Error: No Image Found');
    }
  } else {
    res.send('Error: No filename requested');
  }
};

export default search;
