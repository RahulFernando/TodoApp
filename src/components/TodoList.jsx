import React, {Component} from 'react';

// TodoItem component
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {
        // destructuring
        const { items, handleDelete, handleEdit, handleStatus} = this.props;

        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {/*iterate through items*/}
                {items.reverse().map(item => {
                    return(
                        <TodoItem key={item.id} title={item.item} status={item.status} handleDelete={() => handleDelete(item.id)} handleEdit={() => handleEdit(item.id)} handleStatus={() => handleStatus(item.id)}/>
                    )
                })}
            </ul>
        );
    }
}

export default TodoList;