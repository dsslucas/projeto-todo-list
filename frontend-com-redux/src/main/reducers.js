import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

//Reducer: concatena todos os outros
const rootReducer = combineReducers({
    //Chamada pro Reducer
    todo: todoReducer
})

export default rootReducer