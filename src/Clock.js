import React, { Component } from "react";

export class Clock extends Component {
    constructor() {
        super();
        this.state = {
            time: 0,
        };
    }

    tick() {
        console.log("tick");
        setTimeout(() => {
            this.setState((prevState) => ({
                time: prevState.time + 1,
            }));
        }, 1000);
    }
    render() {
        // this.tick();
        console.log("render");
        return <div>Clock {this.state.time}</div>;
    }
}

export default Clock;
