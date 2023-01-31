import React, { Component } from "react"; //------- comparing and chnging value

export class LifeCycleChild extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("helo from get derived from props");
        if (props.name !== state.name) {
            return {
                name: props.name,
            };
        }
        return null;
    }

    render() {
        console.log("hello render get props childs");
        console.log(this.state.name);
        return <div>{this.state.name}</div>;
    }
}

export default LifeCycleChild;
