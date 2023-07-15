import React, { useState, createContext } from "react";
import "./Input.css";

import Button, { buttons } from "../Buttons/Button";
export const InputContext = createContext();
function Input(props) {
    const [input, setInput] = useState(0);

    const buttonClicked = () => {
        input = buttons[5].value;
        setInput(input);
        console.log(input);
    };

    return (
        <div className="calculator-input">
            <input className="calculator-input-field" value={props.num1} onChange={buttonClicked} />
        </div>
    );
}

export default Input;
