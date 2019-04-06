import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            // pass todo as a prop to todo item component
            <TodoItem key={todo.id} todo={todo} />
        ));
    }
}

//proptypes fro the class ClassName.proptypes
Todos.proptype = {
    todos: PropTypes.array.isRequired
}

export default Todos;