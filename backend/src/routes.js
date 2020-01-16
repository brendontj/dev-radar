const { Router } = require('express');
const axios = require('axios');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

routes.get('/search', SearchController.index);
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs/:user', DevController.update);
routes.delete('/devs/:user', DevController.delete);



module.exports = routes;

