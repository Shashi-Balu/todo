import React, { Component, useState } from "react";

function Greet() {
    const [name, setName] = useState("Shashi");
    // name = "Shashi";
    function fun() {
        setName("Balu");
    }
    // console.log(fun());
    console.log(name);

    return <div>Welcome {name}</div>;
}

// function Greet(props) {
//     return <div>{props.name}</div>;
// }

// export class Greet extends Component {
//     render() {
//         return <div>{this.props.name}</div>;
//     }
// }

export default Greet;
