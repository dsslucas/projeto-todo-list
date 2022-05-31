import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: "DESCRIPTION_CHANGED",
    //Evento do input, que pega o valor
    payload: event.target.value
})

//Pesquisa do campo
export const search = () => {
    return (dispatch, getState) => {
        //Description aqui para evitar que seja chamado em cada uma das Actions
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

//Adiciona uma tarefa
export const add = (description) => {
    //Em vez de retornar uma Action, retorna um método que recebe um dispatch como parâmetro
    //Aqui dispara pros Reducers
    return dispatch => {
        axios.post(URL, {description})
            //Adiciona
            //.then(resp => dispatch({type: "TODO_ADDED", payload: resp.data}))

            //Por precisar deletar, usa-se o clear, que compartilha com a opção de limpar o campo
            .then(resp => dispatch(clear()))

            //Quando tiver feito a adição de fato, chama a lista
            .then(resp => dispatch(search()))
    }
}

//Marca como concluído. Aqui, retorna o TODO atualizado
export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

//Marca como pendente
export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

//Remove o to-do
export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

//Limpa o campo do input
export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}