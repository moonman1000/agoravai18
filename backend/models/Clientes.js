const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefone: String,
    endereco: String
});

module.exports = mongoose.model('Cliente', clienteSchema);
