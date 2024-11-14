const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    itens: [
        {
            itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'ItemCardapio', required: true },
            quantidade: { type: Number, required: true }
        }
    ],
    status: { type: String, default: 'preparando' },
    total: { type: Number, required: true }
});

module.exports = mongoose.model('Pedido', pedidoSchema);
