const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pizzaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Conectado ao MongoDB")).catch(console.error);
