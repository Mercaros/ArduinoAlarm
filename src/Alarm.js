import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import './Alarm.css';
import {databaseRef} from './Firebase.js';
import {alarmRef} from './Firebase.js';

class Alarm extends Component {
    state = {
        data: null,
        alarm: false
    };

    componentDidMount() {
        databaseRef.on('value', (snapshot) => {
            this.setState({
                data: snapshot.val()
            });
            console.log('changed', snapshot.val())
        });
    }

    handleAlarmOn = (event) => {
        event.preventDefault();
        this.setState({
            alarm: true
        });
        alert('Form submitted: ' + JSON.stringify(this.state.data));
        alarmRef.update(this.state.alarm);


    };


    handleAlarmOff = (event) => {
        event.preventDefault();
        this.setState({
            alarm: false
        });
        alert('Form submitted: ' + JSON.stringify(this.state.data));
        alarmRef.update(this.state.alarm);

    };


    render() {
        return (
            <>
                <div className="jumbotron jumbotron-fluid mt-4">
                    <div className="container">
                        <h1 className="display-4">The alarm is:</h1>
                        <p className="lead">Motion detected:</p >
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Button onClick={this.handleAlarmOn} variant="success" size="lg">ON</Button>
                        </div>
                        <div className="col">
                            <Button onClick={this.handleAlarmOff} variant="danger" size="lg">OFF</Button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Alarm;
