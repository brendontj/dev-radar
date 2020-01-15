const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();


routes.post('/devs', async (request,response) => {
  const { github_username, techs } = request.body;
  const responseApi = await axios.get(`https://api.github.com/users/${github_username}`);

  // Desetruturação com valor default, caso name não exista name será login que é obrigatorio a todos os users do github
  const { name = login , avatar_url, bio } = responseApi.data;
  
  const techsArray = techs.split(',').map((tech) => tech.trim());

  const dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray,
  });

  return response.json(dev);

});

module.exports = routes;

