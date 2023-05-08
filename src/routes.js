import { Router } from 'express';
import SessionController from './controllers/SessionController.js';

const routes = new Router();

routes.post('/sessions', SessionController.store);

export default routes;