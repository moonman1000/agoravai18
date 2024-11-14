const express = require('express');
const router = express.Router();
const ItemCardapio = require('../models/ItemCardapio');

// Rota para obter todos os itens do cardápio
router.get('/', async (req, res) => {
    try {
        const itens = await ItemCardapio.find();
        res.json(itens);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para adicionar um novo item ao cardápio
router.post('/', async (req, res) => {
    const item = new ItemCardapio({
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        categoria: req.body.categoria
    });

    try {
        const novoItem = await item.save();
        res.status(201).json(novoItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para atualizar um item específico do cardápio
router.patch('/:id', async (req, res) => {
    try {
        const item = await ItemCardapio.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: "Item não encontrado" });
        }

        if (req.body.nome != null) {
            item.nome = req.body.nome;
        }
        if (req.body.descricao != null) {
            item.descricao = req.body.descricao;
        }
        if (req.body.preco != null) {
            item.preco = req.body.preco;
        }
        if (req.body.categoria != null) {
            item.categoria = req.body.categoria;
        }

        const itemAtualizado = await item.save();
        res.json(itemAtualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para remover um item do cardápio
router.delete('/:id', async (req, res) => {
    try {
        const item = await ItemCardapio.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: "Item não encontrado" });
        }

        await item.remove();
        res.json({ message: "Item removido com sucesso" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
