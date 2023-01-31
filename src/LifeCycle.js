import React, { Component } from "react";
import { LifeCycleChild } from "./LifeCycleChild";

export class LifeCycle extends Component {
    constructor() {
        super();
        this.state = {
            name: "Shashi",
        };
        console.log("parent constructor");
    }

    hello() {
        console.log("hello function ");
    }

    componentDidMount() {
        console.log("hello from component did mount");
    }
    render() {
        console.log("hello from render");
        return (
            <div>
                <LifeCycleChild name={this.state.name} />
            </div>
        );
    }
}

export default LifeCycle;
