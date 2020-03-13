import { Router } from 'express';
import CaptureController from './controllers/CaptureController';
import UserController from './controllers/UserController';
import PokeAPIController from './controllers/PokeAPIController';
import SessionController from './controllers/SessionController';


const routes = new Router();

routes.get('/captures', CaptureController.index);
routes.post('/captures', CaptureController.store);

routes.get('/pokemons', PokeAPIController.index);
routes.get('/pokemons/:pokemon', PokeAPIController.moves);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

export default routes;
