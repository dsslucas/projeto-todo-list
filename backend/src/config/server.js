//Descrição
//Relativo a startar o servidor, alocar portas, etc etc

//Porta
const port = 3003

//Faz o parse do corpo da requisição (json, formulário, etc)
const bodyParser = require('body-parser')

//Express: IMPORTANTE, SERVIDOR WEB! Roda em cima do Node
const express = require ('express')

//Starta o Express
const server = express()

// MIDDLEWARES

//Body Parser: sempre que chegar algo encoded (formulários, neste caso), o Body Parser vai ficar responsável. Modo extended expande os padrões aceitos
server.use(bodyParser.urlencoded({ extended: true }))

//Para o JSON
server.use(bodyParser.json())

//Caso esteja tudo OK, aqui ocorre aviso que está OK
server.listen(port, function () {
    console.log(`Backend está funcionando na porta ${3003}.`)
})

module.exports = server