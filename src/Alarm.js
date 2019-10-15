import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import './Alarm.css';
import {database} from './Firebase.js';


class Alarm extends Component {
    state = {
        data: null,
    };

    componentDidMount() {
        database.ref('/').on('value', (snapshot) => {
            this.setState({
                data: snapshot.val()
            });
            console.log('changed', this.state.data)
        });
    }

    toggleAlarm = () => {
        this.setState(prevState => ({
                data: {
                    ...this.state.data,
                    alarmActivated: !prevState.data.alarmActivated,
                },            })
            , () => {
                database.ref('/').update(this.state.data)
            }
        );
    };

    render() {
        const {data} = this.state;
        if (!data) {
            return <div>Loading data from server...</div>
        }
        return (
            <>
                <div className="jumbotron jumbotron-fluid mt-4">
                    <div className="container">
                        <h1 className="display-4">The alarm is: {data.alarmActivated ? 'ON' : 'OFF'} </h1>
                        <p className="lead">Motion detected: {data.countMotions} </p>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Button onClick={this.toggleAlarm}
                                    variant={data.alarmActivated ? 'danger' : 'success'}
                                    size="lg">{data.alarmActivated ? 'SET OFF' : 'SET ON'}</Button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Alarm;