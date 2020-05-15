const User = require('../models/User');
const Perfil = require('../models/Perfil');

module.exports = {

    async index(req, res){
        const { func } = req.query;

        const functions = await Perfil.find({ functions: func });

        return res.json(functions);
    },

    async store(req, res) {
       
        const { filename} = req.file;
        const {area, functions, price} = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({ error : 'Usuário não encontrado.'})
        }

        const perfil = await Perfil.create({
            user : user_id,
            img: filename,
            area,
            functions: functions.split(',').map(x => x.trim()),
            price
        })

        return res.json({perfil});
    }
}