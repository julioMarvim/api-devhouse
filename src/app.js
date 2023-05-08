import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';
import dotenv from 'dotenv';
dotenv.config();

class App{
  //construtor é chamado sempre que a classe for instanciada. 
  constructor(){
    this.server = express();
    const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    mongoose.connect(CONNECTION_STRING);

    this.middlewares();
    this.routes();

  }

  middlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }
}

export default new App().server;