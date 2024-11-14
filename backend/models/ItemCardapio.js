const mongoose = require('mongoose');

const itemCardapioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: String,
    preco: { type: Number, required: true },
    categoria: String
});

module.exports = mongoose.model('ItemCardapio', itemCardapioSchema);
