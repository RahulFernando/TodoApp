import React, {Component} from 'react';

// components
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class Landing extends Component {
    // state
    state = {
        items: [],
        id: Date.now(),
        item: '',
        edit: false
    };

    // handle event
    handleChange = e => {
        this.setState({
            item: e.target.value
        })
    };

    // submit
    handleSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            id: this.state.id,
            item: this.state.item
        };

        console.log(newItem)

        // keep track of older items and newly added item in items array
        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            item: '',
            id: Date.now(),
            edit: false
        })

    };

    // delete items
    handleDelete = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id); // filter items that not equal to id passed
        this.setState({
            items: filteredItems
        })
    };

    // edit items
    handleEdit = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id); // filter items that not equal to id passed
        const selectedItem = this.state.items.find(item => item.id === id); // find item equal to id passed
        this.setState({
            id: id,
            items: filteredItems,
            item: selectedItem.item,
            edit: true
        })
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center">Todo App</h3>
                        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} edit={this.state.edit}/>
                        <TodoList items={this.state.items} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Landing;