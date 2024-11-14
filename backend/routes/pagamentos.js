const express = require('express');
const router = express.Router();
const Pagamento = require('../models/Pagamento');

router.post('/', async (req, res) => {
    try {
        const pagamento = new Pagamento(req.body);
        await pagamento.save();
        res.status(201).json(pagamento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const pagamentos = await Pagamento.find().populate('pedidoId');
        res.json(pagamentos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
