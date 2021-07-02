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
    console.log('Search for:', image);

    const files = await fs.readdir('src/imgs/full');
    const result = files.find((file) => file === image);
    if (result) {
      res.locals.image = image;
      console.log('Search Result:', result);
      next();
    } else {
      console.log('Search Result: No Image Found');
      res.send('No Image Found');
    }
  } else {
    console.log('No Image Requested');
    res.send('Request an image');
  }
};

export default search;
