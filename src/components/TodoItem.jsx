import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        // destructuring
        const { title, handleDelete, handleEdit } = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-primary"  onClick={handleEdit}><i className="fas fa-edit"></i></span>
                    <span className="mx-2 text-danger" onClick={handleDelete}><i className="fas fa-trash"></i></span>
                </div>
            </li>
        );
    }
}

export default TodoItem;