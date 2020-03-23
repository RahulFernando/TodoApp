import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css'

// image
import logo from './img/checklist-2077023_640.jpg'

class Welcome extends Component {
    render() {
        return (
            <div className="container-fluid no-padding">
                <img src={logo} alt="" width="100%"/>
                <Link to='/todo'>
                    <button className="btn-custom">Welcome to Todo App</button>
                </Link>
            </div>
        );
    }
}

export default Welcome;