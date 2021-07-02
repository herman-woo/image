//Route Setup
import express from 'express';
const root = express.Router();
//Import Paths
import convert from '../convert/index';

root.use('/convert', convert);

root.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<h1>Image Processing API</h1>
    <h2>Available Files:</h2>
    <ol>
      <li>http://localhost:3000/imgs/full/toronto.jpg</li>
      <li><button>home</button></li>
      <li><button>ps3</button></li>
      <li><button>AC Origins</button></li>
    </ol>
    <h2>Resize:</h2>
    <div><h3>File:<input></h3>Height<input> Width<input></div>
    <div><button>Convert!</button></div>
  `);
});

export default root;
