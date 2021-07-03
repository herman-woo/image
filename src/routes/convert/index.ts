//import NPM modules
import express from 'express';
//import middleware
import search from '../../utilities/search';
import imageProcess from '../../utilities/imageProcess';

const convert = express.Router();
const checkKey = (oldValue: string, type:string): (string|number) => {
  let newValue = parseInt(oldValue)
  let html = ''
  if(isNaN(newValue)){//if key entered is not a number, value will be true
    if(oldValue === undefined){//if value is undefined, notify user
      html += `<h5>No ${type} entered, default value used 200</h5>`
      return html
    }
    else{//else a string was entered
      html += `<h5>Invalid ${type} key, default value used = 200</h5>`
      return html
    }
  }
  else{
    if(newValue.toString() !== oldValue){
      html += `<h5>Mixed characters and numbers in ${type} key, default value used = 200</h5>`
      return html
    }
    else{
      return newValue
    }
  }
}


convert.get('/', search, async (req, res) => {
  const widthdata = (req.query.width as unknown) as string;
  const heightdata = (req.query.height as unknown) as string;
  const input = `src/imgs/full/${res.locals.image}`;
  const outputPath = 'src/imgs/thumbs/';
  const newFile = `${req.query.filename}.jpg`;
  const output = outputPath + newFile;
  let width = 200;
  let height = 200;
  let result = ""
  let checkWidth = checkKey(widthdata,"width")
  let checkHeight = checkKey(heightdata,"height")
  //console.log(checkWidth,checkHeight)
  const update = (checkedKey: (string|number),originalValue:number):number => {
    if (typeof checkedKey === "number"){
      return checkedKey
    }
    else{
      result += checkedKey
      return originalValue
    }
  }
  width = update(checkWidth,width)
  height = update(checkHeight,height)
  
  await imageProcess(input, width, height, output);
  console.log('...done');
  result += `<h2>converted - ${width}x${height}</h2><img src="http://localhost:3000/imgs/thumbs/${newFile}"></img>`
  res.send(
   result
  );
});

export default convert;
