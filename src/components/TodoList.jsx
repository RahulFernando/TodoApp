import React, {Component} from 'react';

// TodoItem component
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {
        // destructuring
        const {items} = this.props;

        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {/*iterate through items*/}
                {items.map(item => {
                    return(
                        <TodoItem key={item.id} title={item.item}/>
                    )
                })}
                <button type="button" className="btn btn-danger btn-block text-capitalize mt-5">clear all</button>
            </ul>
        );
    }
}

export default TodoList;