import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        // destructuring
        const { title, status, handleDelete, handleEdit, handleStatus } = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className={status === "not completed" ? 'mx-2 text-secondary' : 'mx-2 text-success'}>{status}</span><span className={status === 'not completed' ? 'mx-2 text-secondary' : 'mx-2 text-success'} onClick={handleStatus}><i className="fas fa-check"></i></span>
                    <span className={status === 'not completed' ? 'mx-2 text-primary' : 'mx-2 text-primary invisible'}  onClick={ status === "completed" ? '' : handleEdit}><i className="fas fa-edit"></i></span>
                    <span className="mx-2 text-danger" onClick={handleDelete}><i className="fas fa-trash"></i></span>
                </div>
            </li>
        );
    }
}

export default TodoItem;