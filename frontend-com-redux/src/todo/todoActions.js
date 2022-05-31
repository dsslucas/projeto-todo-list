import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: "DESCRIPTION_CHANGED",
    //Evento do input, que pega o valor
    payload: event.target.value
})

//Pesquisa do campo
export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: "TODO_SEARCHED",
        payload: request
    }
}

//Adiciona uma tarefa
export const add = (description) => {
    const request = axios.post(URL, {description}) //ou description: description
    return {
        type: "TODO_ADDED",
        payload: request
    }
}