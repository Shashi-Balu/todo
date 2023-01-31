import React, { Component } from "react";

export class FormRef extends Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef("");
        this.passwordRef = React.createRef("");
    }

    componentDidMount() {
        this.emailRef.current.focus();
        // this.passwordRef.current.focus();
        console.log(this.emailRef);
    }

    handleLogin = (event) => {
        event.preventDefault();
        console.log(this.emailRef.current.value, this.passwordRef.current.value);
    };
    render() {
        return (
            <div>
                <h1>FormRef</h1>
                <form onSubmit={(event) => this.handleLogin(event)}>
                    <label name="email">Email</label>
                    <input type="text" placeholder="email" ref={this.emailRef} />
                    <br />

                    <label name="email">Password</label>
                    <input type="password" placeholder="password" ref={this.passwordRef} />
                    <br />

                    <button type="submit" value="login" onSubmit={this.handleLogin}>
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default FormRef;
