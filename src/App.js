import React, { Component } from 'react';

import './App.css';
import Todos from './components/Todos';
import { getTodos } from './services/fakeTodosService';

class App extends Component {

  state = {
    todos: getTodos()
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
    console.log('delete id ', id)

    //Complecated
    //use spread operator to copy the existing array and then apply a filter so that
    //the id of items in the array is not equal to the id being passed in
    this.setState({
      todos: [...this.state.todos.filter(
        todo => todo.id !== id)
      ]
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
