import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
//import '../template/custom.css'

import React from 'react'
import About from '../about/about'
import Todo from '../todo/todo'
//import Menu from '../template/menu'
//import Routes from './routes'

export default props => {
    return (
        <div className='container'>
            <h1>Oi</h1>
            <h2>Testando</h2>
            <h3>Burugudud</h3>
            <Todo />
            <About />
        </div>
    )
}