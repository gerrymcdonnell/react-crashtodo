import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    //if completed then put line through
    getStyle = () => {
        // if (this.props.todo.completed) {
        //         return {textDecoration: 'line-through'}
        //     }
        //     else {
        //         return {textDecoration: 'none'}
        //     }

        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // turnary operator version
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
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