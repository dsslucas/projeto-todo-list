import { combineReducers } from 'redux'

//Reducer: concatena todos os outros
const rootReducer = combineReducers({
    //Chaves
    todo: () => ({
        //Reducer por enquanto fixo
        description: "Ler Livro",
        list: [{
            _id: 1,
            description: "Pagar fatura do cartão",
            done: true
        }, {
            _id: 2,
            description: "Reunião com a equipe às 10:00",
            done: false
        }]
    })
})

export default rootReducer