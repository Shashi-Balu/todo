import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: "Shashi",
        };
    }
    render() {
        console.log("Parent Component");
        return (
            <div>
                <h1>Home</h1>
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        );
    }
}
