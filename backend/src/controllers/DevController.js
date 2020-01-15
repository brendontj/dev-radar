const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    store: async (request,response) => {

        const { github_username, techs, latitude, longitude} = request.body;
        

        let dev = await Dev.findOne({ github_username});

        if(!dev) {
            
            const responseApi = await axios.get(`https://api.github.com/users/${github_username}`);

            // Desetruturação com valor default, caso name não exista name será login que é obrigatorio a todos os users do github
            const { name = login , avatar_url, bio} = responseApi.data;
            
            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }

        return response.json(dev);
    },

    index: async (request, response) => {
        const devs = await Dev.find();
        return response.json(devs);
    },


    update: async (request, response) => {
        //TO-DO
    },

    delete: async (request, response) => {
        //TO-DO

    }
}