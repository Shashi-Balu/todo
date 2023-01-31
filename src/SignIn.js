import React, { Component, useState } from "react";

export class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            usename: "",
            password: "",
        };
    }

    render() {
        const handleInput = (event) => {
            this.setState({
                username: event.target.value,
            });
        };

        const handlePassword = (event) => {
            this.setState({
                password: event.target.value,
            });
        };

        const submit = () => {
            console.log(username, password);
        };
        const { username, password } = this.state;
        console.log(username);
        console.log(password);
        return (
            <div>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={(event) => handleInput(event)}
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(event) => handlePassword(event)}
                />
                <br />
                <button onClick={submit}>Submit</button>
            </div>
        );
    }
}
export default SignIn;
