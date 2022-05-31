import React, { Component } from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

//Actions (também do Redux)
import { changeDescription, search } from "./todoActions";

//Estrutura do componente de formulário.

//Necessário transformar em classe para usar o WillMount, para lidar com funções assíncronas
class TodoForm extends Component {
    constructor(props) {
        super(props)
        //Garante que seja apontado para o componente
        this.keyHandler = this.keyHandler.bind(this)
    }

    //Vai ser executado sempre que o componente será exibido.
    componentWillMount(){
        //No momento que fizer a busca e entrar no componente, a lista vem carregada
        this.props.search()
    }

    keyHandler(e) {
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render() {
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 12 8 9'>
                    <input
                        id="description"
                        className="form-control"
                        placeholder="Adicione uma tarefa"
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                    />
                </Grid>
                <Grid cols='12 4 4 3'>
                    <IconButton style="primary" icon="plus" onClick={this.props.handleAdd} />
                    <IconButton style="info" icon="search" onClick={this.props.handleSearch} />
                    <IconButton style="danger" icon="close" onClick={this.props.handleClear} />
                </Grid>
            </div>
        )
    }
}

//Retorna um objeto que vai "ensinar" o React-Redux como vai mapear o estado
//todo está vindo dos reducers
const mapStateToProps = state => ({ description: state.todo.description })

//Faz o Binding do formuláiro
//Dispatch dispara a ação e passa elas para todos os reducers
//BindActionCreators realiza a ligação do disparador de ações do reducers com as actions, de forma automática
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)