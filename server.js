import express from 'express';
import dotenv from 'dotenv';

import products from './data/products.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('The server is Running ...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  res.send('Single Product');
});

app.listen(port, console.log(`The Server is Running On Port : ${port}`));
