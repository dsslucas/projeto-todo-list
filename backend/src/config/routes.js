//Descrição
//Cria rotas para o backend

const express = require('express')

module.exports = function(server){
    //API Routes
    const router = express.Router()

    //ÁREA DOS MIDDLEWARES

    //Específico para URLs com /api. Automaticamente o Router será chamado
    server.use('/api', router)

    //Rotas do To Do
    const todoService = require('../api/todo/todoService')
    //Pega todos os métodos declarados no array e faz o registro.
    //Só será chamada caso a rota ter sido criada (na /api)
    todoService.register(router, '/todos')
}