import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import Eventcard from './Eventcard';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    }

    handleClick() {
        
    }

    render() {
        return (
            <div className="container">
                <div>
                    <Eventcard />
                </div>
            </div>
        );
    }
}

export default Dashboard;