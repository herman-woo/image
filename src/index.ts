//import Express
import express from 'express';

//import Routes
import root from './routes/root/index';

//Server Specs
const app = express(); //Create express server object
const port = process.env.PORT || 5000;
app.use(express.static('src'));

//Routes
app.use('/', root); //Root Route

//Server Listening from Port
app.listen(port, () => {
  console.log(`Image Processing App - Server Listening @ port:${port}`);
});

export default app; //export app to allow for endpoint testing
