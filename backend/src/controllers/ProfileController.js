const Perfil = require('../models/Perfil');

module.exports = {
    async show(req, res){
        const { user_id } = req.headers;

        const profiles = await Perfil.find({ user: user_id });

        return res.json(profiles);
    }
}