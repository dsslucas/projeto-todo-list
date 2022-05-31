import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';

//Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'
import promise from 'redux-promise'

//Integração com a extensão do Chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//Estado da aplicação, que será controlado pelo Redux. É necessário por ter arquivos assíncronos
/*
    1. Chama o Middleware, chamando a Promise por padrão.
    2. Chama o resultado que vai vir pelo createStore
    3. Após, chama os reducers e o devTools
*/
const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app'))
