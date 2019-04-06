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
  // when we click on the the todo item we need to get the id of the item and 
  // then set the state of the item that was clicked to reflect our action
  markComplete = (id) => {

    console.log('id of item is', id)

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

  //delete todo
  delTodo = (id) => {
    console.log(id)

    //use filter function of array
    this.setState({
      todos:[...this.state.todos.filter(todo=>todo.id!==id)]
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
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
