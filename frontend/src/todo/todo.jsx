import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

//PARTE DO BACKEND
import axios from 'axios'

//URL BASE DO BACKEND
const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props){
        super(props)

        //Independente de quem chama, estamos amarrando o mesmo. É necessário para funcionar em vários contextos. Bind será sempre o componente atual
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        //Carrega a lista
        this.refresh()

        //Estado, pro form
        this.state = {
            description: '',
            list: []
        }
    }

    //Sempre que o usuário digita algo, aqui altera o estado
    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    // --------- PARTE DO BACKEND --------------

    handleAdd(){
        const description = this.state.description

        //Faz uma postagem na API. Sempre que adiciona, traz a lista de To-do atualizada
        axios.post(URL, {description}).then(resp => this.refresh())

    }

    //Atualiza a lista
    refresh(){
        //Ordena a lista pela data de criação de forma crescente
        axios.get(`${URL}?sort=-createAt`).then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    //Remove um elemento da lista
    handleRemove(toDo){
        axios.delete(`${URL}/${toDo._id}`).then(resp => this.refresh())
    }

    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm 
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                />
                <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
            </div>
        )
    }


}