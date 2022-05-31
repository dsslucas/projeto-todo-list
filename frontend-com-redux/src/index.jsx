import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';

//Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'

//Middlewares
//Para carregamento após o post. Dentro da Action Creator, retornar um array com várias Actions. No entanto, ele dispara as actions mesmo não tendo request pronto
import multi from 'redux-multi'

//Promise, para as listas assíncronas. Sempre que retorna uma Promise na Action, espera ser resolvida para depois chegar aos reducers
import promise from 'redux-promise'

//Thunk
import thunk from 'redux-thunk'

//Integração com a extensão do Chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//Estado da aplicação, que será controlado pelo Redux. É necessário por ter arquivos assíncronos
/*
    1. Chama o Middleware, chamando a Promise por padrão.
    2. Chama o resultado que vai vir pelo createStore
    3. Após, chama os reducers e o devTools
*/
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app'))
