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
        const github_username = request.params.user;

        const {name, avatar_url, techs, bio} = request.body;

        const infos = {
            name,
            avatar_url,
            techs,
            bio
        };
        
        Dev.findOneAndUpdate({'github_username': github_username},infos, { omitUndefined:true, useFindAndModify: false }, (err) => {
            if (err) return response.status(500).json({error: err});
            return response.status(200).json({ status: 'updated' });
            });
        },

    delete: async (request, response) => {
        const github_username = request.params.user;

        Dev.deleteOne({github_username}, (err) => {
            if (err) {
                return response.status(500).json({status: 'failed'});
            }
            return response.status(200).json({status: 'dev deleted'});
        });

        

    }
}