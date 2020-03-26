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
        edit: false,
        status: ''
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
            item: this.state.item,
            status: 'not completed'
        };

        console.log(newItem)

        // keep track of older items and newly added item in items array
        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            item: '',
            id: Date.now(),
            edit: false,
            status: 'not completed'
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

    // complete task
    handleStatus = (id) => {
        const selectedItem = this.state.items.find(item => item.id === id); // find item equal to id passed
        selectedItem.status = 'completed';
        this.setState({
            id: id,
            status: selectedItem.status,
            items: this.handleAfterStatusChange(this.state.items)
        });


    };

    handleAfterStatusChange = (list) => {
        const sort = list.filter(item => item.status === 'completed')
        for (let i = 0; i < list.length; i++) {
            if (list[i].status !== 'completed') {
                sort.push(list[i])
            }
        }

        return sort;
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center"><i className="fas fa-clipboard-list fa-7x"></i></h3>
                        <TodoInput item={this.state.item}  handleChange={this.handleChange} handleSubmit={this.handleSubmit} edit={this.state.edit}/>
                        <TodoList items={this.state.items} handleDelete={this.handleDelete} handleEdit={this.handleEdit} handleStatus={this.handleStatus}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Landing;