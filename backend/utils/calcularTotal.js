module.exports = (itens) => {
    return itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
};
