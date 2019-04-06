import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title:''
    }
    render() {
        return (
            <form style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    placeholder="add todo"
                    value={this.state.title}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        );
    }
}

export default AddTodo;