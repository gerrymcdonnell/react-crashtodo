import React, { Component } from 'react';
import TodoItem from './TodoItem'


class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            // pass todo as a prop to todo item component
            <TodoItem key={todo.id} todo={todo} />
        ));
    }
}

export default Todos;