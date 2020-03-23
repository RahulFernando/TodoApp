import React, {Component} from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Welcome from "./components/Welcome";
import Landing from "./components/Landing";

class App extends Component {
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
          <Router>
              <Route exact path="/" component={Welcome}/>
              <Route exact path='/todo' component={Landing}/>
          </Router>
      );
  }
}

export default App;
