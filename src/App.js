import React, { Component } from 'react';

import './App.css';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { getTodos } from './services/fakeTodosService';
import NotFound from "./components/notFound";
import Header from './layout/header'
import About from './components/pages/about';

//import route component
import { BrowserRouter,Route, Switch, Redirect } from 'react-router-dom'

import axios from 'axios';

//uuid
//import uuid from 'uuid';

// https://youtu.be/sBws8MSXN7A?t=4542


class App extends Component {

  state = {
    todos: [] /** getTodos()*/
  }


  componentDidMount(){
    //axios returns a promise
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>this.setState({todos:res.data}))
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
    

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>
        this.setState({
          todos: [...this.state.todos.filter(
            todo => todo.id !== id)
          ]
        })
      )
  }


  addTodo = (title) => {
    console.log(title);

    /*const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }*/

    axios.post('https://jsonplaceholder.typicode.com/todos',
      {
        title,
        completed:false
      }
    ).then(res=>this.setState({ todos: [...this.state.todos, res.data] }))


    //use spread operator to copy array and add new object
    
  }


  render() {

    //print out the state
    console.log(this.state.todos)

    return (
      <BrowserRouter>

        <div className="App">
          <div className="container">
          <Header />
          {/* {router component} */}
              <Route exact path="/" render={props=>(
                <React.Fragment>
                    <AddTodo addTodo={this.addTodo} />
                    <h3>Todos are below</h3>
                    {/* {pass todos to component} */}
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                </React.Fragment>
              ) }/>

              <Route path="/about" component={About}/>

            
            
          </div>
        </div>

        </BrowserRouter>
    );
  }
}

export default App;
