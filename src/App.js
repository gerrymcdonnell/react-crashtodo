import React, { Component } from 'react';

import './App.css';
import Todos from './components/Todos';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'gdfg 1 fdgdfgfdg',
        completed: false
      },
      {
        id: 2,
        title: 'gdfg 2 fdgdfgfdg',
        completed: false
      },
      {
        id: 3,
        title: 'gdfg 3 fdgdfgfdg',
        completed: false
      }
    ]
  }


  render() {

    //print out the state
    console.log(this.state.todos)

    return (
      <div className="App">
        <h1> My App</h1>
        {/* {pass todos to component} */}
        <Todos myprop1="prop1" todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
