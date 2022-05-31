//Responsável por evoluir o estado

//ESTADO INICIAL
const INITIAL_STATE = {
    description: "", list: []
}

//Função que representa o reducer. Recebe o estado atual e uma action; sempre que uma action for chamada, os reducers são chamados e perguntam se querem alterar o estado ou não
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            //action,payload vem da ACTION
            return { ...state, description: action.payload }
        case "TODO_SEARCHED":
            return { ...state, list: action.payload.data }
        //case "TODO_ADDED":
        case "TODO_CLEAR":
            return { ...state, description: '' }

        default:
            return state
    }
}