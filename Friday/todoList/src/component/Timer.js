import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        }
    }

    setTime() {
        this.setState({time: new Date()})
    }

    componentDidMount() {
        this.timeOut = setTimeout(() => this.setTime(), 1000)
    }

    componentDidUpdate() {
        this.timeOut = setTimeout(() => this.setTime(), 1000)
    }
    
    render() { 
        return (
            <div className='timer'>
                <label>{this.state.time.toLocaleTimeString()}</label>
            </div>
        );
    }
}
 
export default Timer;