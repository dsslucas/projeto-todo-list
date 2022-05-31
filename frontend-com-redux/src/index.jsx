import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';

//Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'

//Estado da aplicação, que será controlado pelo Redux
const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app'))
