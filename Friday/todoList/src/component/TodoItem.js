import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <li>
                {this.props.index}-
                {this.props.title}
                <button onClick={this.props.remove}>x</button>
            </li>
        );
    }
}
 
export default TodoItem;