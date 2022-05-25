//Descrição
//Carrega os principais arquivos de configuração

const server = require('./config/server')
require('./config/database')

//Passando parametro para a função de rotas
require('./config/routes')(server)