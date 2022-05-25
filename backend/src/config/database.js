/*
    Descrição
    Configuração com o MongoDB
*/

//Serve tanto para mapeamento, quanto para conexão com o Mongo (post, delete, put, get)
const mongoose = require('mongoose')

//Utiliza a API do Node (aviso para depreciação)
mongoose.Promise = global.Promise

//Exporta a conexão com o banco de dados com o dominio
module.exports = mongoose.connect('mongodb://localhost/todo', {
    //Para sumir os warnings
    useNewUrlParser: true,
    useUnifiedTopology: true
})