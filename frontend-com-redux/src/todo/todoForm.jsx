import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

//Redux
import { connect } from 'react-redux'

//Estrutura do componente de formulário.

const TodoForm = props => {

    //Se usuário pressionar Enter ou Esc
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 12 8 9'>
                <input
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                />
            </Grid>
            <Grid cols='12 4 4 3'>
                <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
                <IconButton style="info" icon="search" onClick={props.handleSearch} />
                <IconButton style="danger" icon="close" onClick={props.handleClear} />
            </Grid>

        </div>
    )
}

//Retorna um objeto que vai "ensinar" o React-Redux como vai mapear o estado
//todo está vindo dos reducers
const mapStateToProps = state => ({description: state.todo.description})

export default connect(mapStateToProps)(TodoForm)