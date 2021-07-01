import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Okay, Server');
});

app.listen(port, () => {
  console.log(`Server Listening @ port:${port}`);
});
