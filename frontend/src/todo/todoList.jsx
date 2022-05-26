import React from "react";
import IconButton from "../template/iconButton";

export default props => {
    //Renderiza os To-Do
    const renderRows = () => {
        const list = props.list || []
        return list.map(toDo => (
            <tr key={toDo._id}>
                <td>{toDo.description}</td>
                <td>
                    <IconButton style="danger" icon="trash-o" onClick={() => props.handleRemove(toDo)}/>
                    <IconButton />
                </td>
            </tr>
        ))
    }


    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}