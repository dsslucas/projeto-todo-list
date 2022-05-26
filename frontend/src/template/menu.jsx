import React from "react";

export default props => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
                <i className='fa fa-calendar-check-o'></i> To-Do List
            </a>

            <ul className="navbar-nav">
                <li className="nav-item p-2">
                    <a className="nav-link" href="#/todos">Tarefas</a>
                </li>
                <li className="nav-item p-2">
                    <a className="nav-link" href="#/about">Sobre</a>
                </li>
            </ul>
        </nav>
    )
}