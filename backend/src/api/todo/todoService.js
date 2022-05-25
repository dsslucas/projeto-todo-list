//Descrição
//

const Todo = require('./todo')

//Métodos HTTP. IMPORTANTE!
Todo.methods(['get', 'post', 'put', 'delete'])

//Validações
//Para atualizações de nome, retorna atualizado
//Node Restful não valida atualizações. Para tal, é necessário o runValidators
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo