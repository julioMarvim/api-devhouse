import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes.js';

dotenv.config();

class App {
  // construtor é chamado sempre que a classe for instanciada.
  constructor() {
    this.server = express();
    const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
    mongoose.connect(CONNECTION_STRING);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(
      '/files',
      express.static(path.resolve(process.cwd(), 'uploads'))
    );
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
