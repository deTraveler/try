import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

class Eventcard extends Component {
    render() {
        return (
            <Col sm={6}>
                <div className="card text-white bg-info mb-3">
                    <div className="card-body" >
                        <h5 class="card-title">New Event Card</h5>
                        <Form>
                                <FormGroup row>
                                    <Label for="title" sm={2}>Title</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="title" id="title" placeholder="Title" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="location" sm={2}>Location</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="location" id="location" placeholder="Location" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="participant" sm={2}>Participant</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="participant" id="participant" placeholder="Participant" autoComplete="on" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="datetime" sm={2}>Date and Time</Label>
                                    <Col sm={10}>
                                        <Input type="datetime-local" name="datetime" id="datetime" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="notes" sm={2}>Notes</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="notes" id="notes" placeholder="Notes"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup check row>
                                    <Col sm={{size: 10, offset: 2}}>
                                        <Button type='submit' onClick={this.handleClick}>Submit</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                </div>
            </Col>
        );
    }
}

export default Eventcard;