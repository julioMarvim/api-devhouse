import express from 'express';
import routes from './routes.js';

class App{
  //construtor é chamado sempre que a classe for instanciada. 
  constructor(){
    this.server = express();
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