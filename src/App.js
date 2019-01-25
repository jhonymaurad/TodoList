import React, { Component } from 'react';
import Todos from './components/Todos';
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
        completed: true
      },
      {
        id: 3,
        title: 'walk the dog',
        completed: false
      }
    ]
  }
  markComplete = (e) =>{
    console.log('hello')
  }
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
