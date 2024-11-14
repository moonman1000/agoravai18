const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
const clienteRoutes = require('./routes/clientes');
const pedidoRoutes = require('./routes/pedidos');
const pagamentoRoutes = require('./routes/pagamentos');
const cardapioRoutes = require('./routes/cardapio'); // Nova rota para o cardápio

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use('/clientes', clienteRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/pagamentos', pagamentoRoutes);
app.use('/cardapio', cardapioRoutes); // Integrando a rota de cardápio

io.on('connection', (socket) => {
    console.log('Cliente conectado');
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

mongoose.connect('mongodb://localhost:27017/pizzaria', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado ao MongoDB');
        server.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    })
    .catch(err => console.log(err));

