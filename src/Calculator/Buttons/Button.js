import React, { createContext, useContext } from "react";
import { InputContext } from "../Input/Input";
import "./Button.css";
// import { buttonClicked } from "../Input/Input";

export const buttons = [
    {
        id: 1,
        value: "CE",
    },
    {
        id: 2,
        value: "<",
    },
    {
        id: 3,
        value: "%",
    },
    {
        id: 4,
        value: "+",
    },
    {
        id: 5,
        value: 7,
    },
    {
        id: 6,
        value: 8,
    },
    {
        id: 7,
        value: 9,
    },
    {
        id: 8,
        value: "*",
    },
    {
        id: 9,
        value: 4,
    },
    {
        id: 10,
        value: 5,
    },
    {
        id: 11,
        value: 6,
    },
    {
        id: 12,
        value: "-",
    },
    {
        id: 13,
        value: 1,
    },
    {
        id: 14,
        value: 2,
    },
    {
        id: 15,
        value: 3,
    },
    {
        id: 16,
        value: "+",
    },
    {
        id: 17,
        value: 0,
    },
    {
        id: 18,
        value: "00",
    },
    {
        id: 19,
        value: ".",
    },
    {
        id: 20,
        value: "=",
    },
];

function Button(props) {
    const button1 = useContext(InputContext);
    // function button1() {
    //     console.log(props);
    //     // props.setNum1(0);
    //     // console.log("clicked", buttons[1].value);
    // }
    // <ButtonContext.Provider value={buttonClicked}></ButtonContext.Provider>;
    console.log(props.operation);
    return (
        <div className="buttons-container">
            {buttons.map((button) => (
                <button className="calculator-button" onClick={props.operation}>
                    {button.value}
                </button>
            ))}
        </div>
    );
}

export default Button;
