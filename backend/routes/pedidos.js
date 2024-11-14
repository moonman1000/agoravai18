const express = require('express');
const router = express.Router();
const Pedido = require('../models/Pedido');

router.post('/', async (req, res) => {
    try {
        const pedido = new Pedido(req.body);
        await pedido.save();
        res.status(201).json(pedido);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const pedidos = await Pedido.find().populate('clienteId');
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
