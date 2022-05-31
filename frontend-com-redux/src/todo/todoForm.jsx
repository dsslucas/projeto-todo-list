import React, { Component } from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

//Actions (também do Redux)
import { changeDescription, search, add, clear } from "./todoActions";

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

    //Realiza o envio por enter ou botão
    keyHandler(e) {
        //Description é dado vindo da Store! O restante é  função
        const { add, search, description, clear } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            this.props.clear()
        }
    }

    render() {
        //Description é dado vindo da Store!
        const { add, search, description} = this.props

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
                    <IconButton style="primary" icon="plus" onClick={() => add(description)} />
                    <IconButton style="info" icon="search" onClick={() => search(description)} />
                    <IconButton style="danger" icon="close" onClick={this.props.clear} />
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
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)