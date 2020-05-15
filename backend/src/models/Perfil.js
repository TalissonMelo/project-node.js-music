const mongoose = require('mongoose');

const PerfilSchema = new mongoose.Schema({
    img : String,
    area: String,
    price: Number,
    functions: [String],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    toJSON: {
        virtuals: true,
    },
});

PerfilSchema.virtual('img_url').get(function(){
    return `http://localhost:3333/files/${this.img}`
})

module.exports = mongoose.model('Perfil', PerfilSchema);