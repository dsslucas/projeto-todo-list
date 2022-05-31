import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

//PARTE DO BACKEND
import axios from 'axios'
import todoForm from './todoForm'

//URL BASE DO BACKEND
const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)

        //Independente de quem chama, estamos amarrando o mesmo. É necessário para funcionar em vários contextos. Bind será sempre o componente atual
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handkeMarkAsPending = this.handkeMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        //Carrega a lista
        this.refresh()

        //Estado, pro form
        this.state = {
            description: '',
            list: []
        }
    }

    //Sempre que o usuário digita algo, aqui altera o estado
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    // --------- PARTE DO BACKEND --------------

    handleAdd() {
        const description = this.state.description

        //Faz uma postagem na API. Sempre que adiciona, traz a lista de To-do atualizada
        axios.post(URL, { description }).then(resp => this.refresh())

    }

    //Atualiza a lista. Consulta específico também
    refresh(description = '') {
        //Realiza a busca
        const search = description ? `&description__regex=/${description}/` : ''

        //Ordena a lista pela data de criação de forma crescente
        axios.get(`${URL}?sort=-createAt${search}`).then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    //Remove um elemento da lista
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description))
    }

    //A partir destes, é importante chamar o refresh() com a descrição, para que os ToDo filtrados, quando concluídos, não exibam os demais não estabelecidos.
    //Marca como concluído
    handleMarkAsDone(todo) {
        //Pega o objeto do jeito que está e altera apenas o Done
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then(resp => this.refresh(this.state.description))
    }

    //Marca como pendente
    handkeMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todoForm, done: false }).then(resp => this.refresh(this.state.description))
    }

    //Realiza pesquisas
    handleSearch() {
        this.refresh(this.state.description)
    }

    //Limpa o campo de pesquisa
    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList

                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handkeMarkAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}

//Removido a Lista do To-do List
// list = {this.state.list}