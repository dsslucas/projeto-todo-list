import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

//Actions (também do Redux)
import { changeDescription } from "./todoActions";

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
                    onChange={props.changeDescription}
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

//Faz o Binding do formuláiro
//Dispatch dispara a ação e passa elas para todos os reducers
//BindActionCreators realiza a ligação do disparador de ações do reducers com as actions, de forma automática
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)