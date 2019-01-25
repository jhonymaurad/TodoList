import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import Header from './components/layout/Header';
import './App.css';
import uuid from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'make dinner',
        completed: false
      },
      {
        id: uuid.v4(),
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

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed:false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header/>
            <Route exact path= '/' render={props => (
              <React.Fragment>
              <AddToDo addTodo={this.addTodo}/>
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  handleDelete={this.handleDelete}/>
              </React.Fragment>
            )}/>

            <Route path= '/about' component={About}/>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
