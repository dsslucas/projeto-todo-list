import React from "react";
import IconButton from "../template/iconButton";

//Redux
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import { markAsDone, markAsPending, remove } from "./todoActions";


const TodoList = props => {
    //Renderiza os To-Do
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className="tableActions">
                    <IconButton
                        style="success"
                        icon="check"
                        onClick={() => props.markAsDone(todo)}
                        hide={todo.done} />
                    <IconButton
                        style="warning"
                        icon="undo"
                        onClick={() => props.markAsPending(todo)}
                        hide={!todo.done} />
                    <IconButton
                        style="danger"
                        icon="trash-o"
                        onClick={() => props.remove(todo)}
                        hide={!todo.done} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

//Damos o estado como parâmetro e retornamos um objeto (neste caso, uma lista).
//todo está vindo dos reducers!
const mapStateToProps = state => ({list: state.todo.list})

//Mapeia as ações para dentro do Props
const mapDispatchToProps = (dispatch) => bindActionCreators({markAsDone, markAsPending, remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)