import React, { Component } from "react";

export default class RegularComp extends Component {
    render() {
        console.log("Regular component Rendered");
        return <div>RegularComponent {this.props.name}</div>;
    }
}
