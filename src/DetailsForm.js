import React, { Component } from "react";

export class DetailsForm extends Component {
    constructor() {
        super();
        this.countryRef = React.createRef("");
        this.stateRef = React.createRef("");
    }

    submitDetails = (event) => {
        event.preventDefault();
        console.log(this.countryRef.current.value, this.stateRef.current.value);
    };
    render() {
        return (
            <div>
                <h1>DetailsForm</h1>
                <form onSubmit={(event) => this.submitDetails(event)}>
                    <label name="country">Country</label>
                    <input type="text" placeholder="country name" ref={this.countryRef} />
                    <br />
                    <label name="state">State</label>
                    <input type="text" placeholder="state name" ref={this.stateRef} />
                    <br />
                    <input type="submit" onClick={this.submitDetails} />
                </form>
            </div>
        );
    }
}

export default DetailsForm;
