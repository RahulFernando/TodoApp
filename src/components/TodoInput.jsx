import React, {Component} from 'react';

class TodoInput extends Component {
    render() {
        // destructuring
        const { item, handleChange, handleSubmit, edit } = this.props;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-list"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="add an item to list" value={item} onChange={handleChange }/>
                    </div>
                    <button type="submit" className={edit ? 'btn btn-block btn-primary mt-3' : 'btn btn-block btn-success mt-3'}> {edit ? 'edit item': 'add item'}</button>
                </form>
            </div>
        );
    }
}

export default TodoInput;