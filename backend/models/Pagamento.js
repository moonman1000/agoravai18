const mongoose = require('mongoose');

const pagamentoSchema = new mongoose.Schema({
    pedidoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
    valor: { type: Number, required: true },
    metodo: String,
    status: { type: String, default: 'pendente' }
});

module.exports = mongoose.model('Pagamento', pagamentoSchema);
