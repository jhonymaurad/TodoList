import React, { Component } from 'react';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import Header from './components/layout/Header';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'make dinner',
        completed: false
      },
      {
        id: 3,
        title: 'walk the dog',
        completed: false
      }
    ]
  }
  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  handleDelete = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header/>
          <AddToDo/>
          <Todos todos={this.state.todos}
            markComplete={this.markComplete}
            handleDelete={this.handleDelete}/>
        </div>
      </div>
    );
  }
}

export default App;
