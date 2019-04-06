import React, { Component } from 'react';

import './App.css';
import Todos from './components/Todos';

class App extends Component {

  state={
    todos:[
      {
        id:1,
        title:'gdfg 1 fdgdfgfdg',
        completed:false
      },
      {
        id:2,
        title:'gdfg 2 fdgdfgfdg',
        completed:false
      },
      {
        id:3,
        title:'gdfg 3 fdgdfgfdg',
        completed:false
      }
    ]
  }


  render() {
    
    console.log(this.state.todos)

    return (
      <div className="App">
        <h1> App</h1>
        <Todos/>
      </div>
    );
  }
}

export default App;
