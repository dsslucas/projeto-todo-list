//Descrição
//Cors permite trabalhar com Backend e Frontend simultaneamente, com duas portas etc. É uma garantia de segurança, pois na ocorrência de uma falha, é possível ter problemas.

module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*')

    //Permite o uso de métodos
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    //Permite que a requisição seja bem sucedida em outras aplicações
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    //Conclui o fluxo da aplicação, partindo pros próximos middlewares
    next()

}