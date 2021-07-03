//Route Setup
import express from 'express';
const root = express.Router();
//Import Paths
import convert from '../convert/index';

root.use('/convert', convert);

root.get('/', (req: express.Request, res: express.Response): void => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<h1>Image Processing API</h1>
    <h2>Available Files:</h2>
    <ol>
      <li><a href="http://localhost:3000/imgs/full/egypt.jpeg">egypt.jpeg</a></li>
      <li><a href="http://localhost:3000/imgs/full/encenadaport.jpg">encenadaport.jpg</a></li>
      <li><a href="http://localhost:3000/imgs/full/fjord.jpg">fjord.jpg</a></li>
      <li><a href="http://localhost:3000/imgs/full/home.jpg">home.jpg</a></li>
      <li><a href="http://localhost:3000/imgs/full/icelandwaterfall.jpg">icelandwaterfall.jpg</a></li>
      <li><a href="http://localhost:3000/imgs/full/palmtunnel.jpg">palmtunnel.jpg</a></li>
      <li><a href="http://localhost:3000/imgs/full/ps3.jpg">ps3.jpg</a></li>
      <li><a href="http://localhost:3000/imgs/full/santamonica.jpg">santamonica.jpg</a></li>
      <li><a href="http://localhost:3000/imgs/full/toronto.jpg">toronto.jpg</a></li>
    </ol>
    <h2>Keys:</h2>
    <ul>
      <li>filename - use any filename on the available list, do not use extention</li>
      <li>(optional)ext - default extention is jpg, if the original file is not jpg, must specify the extention here, example egypt.jpeg use ext=jpeg</li>
      <li>(optional)width - desired width dimention to convert to, default value is 200</li>
      <li>(optional)height - desired height dimention to convert to, default value is 200</li>
    </ul>
    <h3>Example 1: <a href="/convert/?filename=toronto&width=500&height=500">/convert/?filename=toronto&width=200&height=200</a></h3>
    <h3>Example 2: <a href="/convert/?filename=egypt&ext=jpeg">/convert/?filename=egypt&ext=jpeg</a></h3>
    <h3>Example 2: <a href="/convert/?filename=">/convert/?filename=</a></h3>
  `);
});

export default root;
