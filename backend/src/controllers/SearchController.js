const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    index: async (request,response) => {
        // Buscar todos os devs em um raio de 10km
        // Filtrar por tecnologia

        const { latitude, longitude, techs } = request.query;
       
        const techsArray = parseStringAsArray(techs);
       

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude,latitude],
                    },
                $maxDistance: 100000,
                },
            },
        });

        return response.json({devs});
    },
};