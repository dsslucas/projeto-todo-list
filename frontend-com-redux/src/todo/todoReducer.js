//Responsável por evoluir o estado

const INITIAL_STATE = {
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
}

//Função que representa o reducer. Recebe o estado atual e uma action; sempre que uma action for chamada, os reducers são chamados e perguntam se querem alterar o estado ou não
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            //action,payload vem da ACTION
            return { ...state, description: action.payload }
        case "TODO_SEARCHED":
            return { ...state, list: action.payload.data}
        default:
            return state
    }
}