import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends Component {

    //arrow function version
    markComplete=(e)=>{
        console.log('Todos componet fnction call',this.props)
    }

    render() {
        return this.props.todos.map((todo) => (
            // pass todo as a prop to todo item component
            <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete}/>
        ));
    }
}

//proptypes fro the class ClassName.proptypes
Todos.proptype = {
    todos: PropTypes.array.isRequired
}

export default Todos;