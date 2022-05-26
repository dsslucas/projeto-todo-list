import React from "react";
import IconButton from "../template/iconButton";


export default props => {
    //Renderiza os To-Do
    const renderRows = () => {
        const list = props.list || []
        return list.map(toDo => (
            <tr key={toDo._id}>
                <td className={toDo.done ? 'markedAsDone' : ''}>{toDo.description}</td>
                <td className="tableActions">
                    <IconButton
                        style="success"
                        icon="check"
                        onClick={() => props.handleMarkAsDone(toDo)}
                        hide={toDo.done} />
                    <IconButton
                        style="warning"
                        icon="undo"
                        onClick={() => props.handleMarkAsPending(toDo)}
                        hide={!toDo.done} />
                    <IconButton
                        style="danger"
                        icon="trash-o"
                        onClick={() => props.handleRemove(toDo)}
                        hide={!toDo.done} />

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