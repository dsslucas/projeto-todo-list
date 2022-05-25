//Descrição
//Faz o mapeamento do objeto, vindo do documento do Mongo

//Restful cria uma casca
const restful = require('node-restful')

const mongoose = restful.mongoose

//Os dados que serão trabalhados no backend. IMPORTANTE!
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)