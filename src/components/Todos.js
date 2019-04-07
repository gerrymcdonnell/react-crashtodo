import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends Component {


    render() {
        return this.props.todos.map((todo) => (
            // pass todo as a prop to todo item component
            <TodoItem
               
                todo={todo}
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo}
            />
        ));
    }
}

//proptypes fro the class ClassName.proptypes
Todos.proptype = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;