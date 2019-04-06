import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    //if completed then put line through
    getStyle = () => {
        if (this.props.todo.completed) {
                return {textDecoration: 'line-through'}
            }
            else {
                return {textDecoration: 'none'}
            }
        
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo.title}</p>
            </div>
        );
    }
}

//proptypes i.e classname
TodoItem.proptype = {
    todos: PropTypes.object.isRequired
}

export default TodoItem;