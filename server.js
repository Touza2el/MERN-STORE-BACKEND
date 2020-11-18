import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('The server is Running ...');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, console.log(`The Server is Running On Port : ${port}`));
