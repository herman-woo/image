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
    //if name is not undefined, conduct search
    let ext = 'ext';
    if (req.query.ext === undefined) {
      //if no ext was defined
      ext = '.jpg'; //set jpg as default extention
    } else {
      ext = `.${req.query.ext}`; //if ext key was used, set the extention to the key
    }
    const fullImage = (name + ext) as string; //get the full file name
    try {
      const files = await fs.readdir('src/imgs/full'); //get an array of all existing imgs in the full folder
      const result = files.find((file) => file === fullImage); //search to see if the entered filename exists in the fs
      if (result) {
        // if image exists
        res.locals.fullImage = fullImage; //set a value to be passed on in response.locals
        //check to see if thumbs directory exists
        try {
          await fs.readdir('src/imgs/thumbs'); //check thumbs folder to see if image exists
          console.log('Thumbs Folder Found...');
          next(); //If thumbs file exists && current image name cannot be found in the folder, run convert script
        } catch (error) {
          //if thumbs folder does not exist:
          try {
            await fs.mkdir('src/imgs/thumbs'); //create the folder
            await fs.readdir('src/imgs/thumbs');
            console.log('Created new Thumbs folder');
            next(); //since there was no thumbs folder, that means no thumbs existsed prior, clearing it up to be converted.
          } catch (error) {
            console.log('Could not Create new thumbs folder');
            res.send('No Output Directory');
          }
        }
      } else {
        console.log('Search Result: No Image Found');
        res.send('Error: No Image Found');
      }
    } catch (error) {
      res.send('Failed to get images');
    }
  } else {
    res.send('Error: No filename requested');
  }
};

export default search;
