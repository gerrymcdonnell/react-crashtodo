import React, { Component } from 'react';

import './App.css';
import Todos from './components/Todos';

class App extends Component {

  state = {
    todos: [
      {
        id: 11,
        title: 'gdfg 1 fdgdfgfdg',
        completed: false
      },
      {
        id: 12,
        title: 'gdfg 2 fdgdfgfdg',
        completed: false
      },
      {
        id: 13,
        title: 'This task is comepleted',
        completed: true
      }
    ]
  }

  //arrow function version
  markComplete = (id) => {
    console.log('id is', id)

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          //toggle the completed varable
          todo.completed = !todo.completed
        }
        return todo;
      })
    })

  }

  render() {

    //print out the state
    console.log(this.state.todos)

    return (
      <div className="App">
        <h1> My App</h1>
        <h3>Todos are below</h3>
        {/* {pass todos to component} */}
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}

export default App;
