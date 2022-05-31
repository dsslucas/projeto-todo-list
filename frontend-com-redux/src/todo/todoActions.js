import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: "DESCRIPTION_CHANGED",
    //Evento do input, que pega o valor
    payload: event.target.value
})

//Pesquisa do campo
export const search = () => {
    const request = axios.get(`${URL}?sort=-createAt`)
    return {
        type: "TODO_SEARCHED",
        payload: request
    }
}

//Adiciona uma tarefa

export const add = (description) => {
    //Em vez de retornar uma Action, retorna um método que recebe um dispatch como parâmetro
    //Aqui dispara pros Reducers
    return dispatch => {
        axios.post(URL, {description})
            //Adiciona
            .then(resp => dispatch({type: "TODO_ADDED", payload: resp.data}))
            
            //Quando tiver feito a adição de fato, chama a lista
            .then(resp => dispatch(search()))
    }
}