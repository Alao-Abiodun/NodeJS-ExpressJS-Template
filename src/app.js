import express from 'express';
import dotenv from 'dotenv';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
dotenv.config();

import connectDB from './database/db';
connectDB();

const app = express();

const { PORT } = process.env || 2331;

app.get('/', (req, res) => {
  res.send('The main entry point');
});

app.listen(PORT, () => {
  console.log(`The server is running on PORT ${PORT}`);
});
