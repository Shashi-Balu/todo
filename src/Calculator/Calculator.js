import React, { useState } from "react";
import "./Buttons/Button.css";
import "./Input/Input.css";
import "./Calculator.css";

const buttons = [
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
        value: "7",
    },
    {
        id: 6,
        value: "8",
    },
    {
        id: 7,
        value: "9",
    },
    {
        id: 8,
        value: "*",
    },
    {
        id: 9,
        value: "4",
    },
    {
        id: 10,
        value: "5",
    },
    {
        id: 11,
        value: "6",
    },
    {
        id: 12,
        value: "-",
    },
    {
        id: 13,
        value: "1",
    },
    {
        id: 14,
        value: "2",
    },
    {
        id: 15,
        value: "3",
    },
    {
        id: 16,
        value: "+",
    },
    {
        id: 17,
        value: "0",
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

function Calculator() {
    let [input, setInput] = useState("");

    const buttonClicked = (value) => {
        if (value === "CE") {
            setInput("");
        } else if (value === "=") {
            setInput(eval(input));
        } else if (value === "<") {
            const remInput = input.substring(0, input.length - 1);
            setInput(remInput);
        } else {
            setInput((prev) => (prev += value));
            console.log(value);
        }
    };

    return (
        <div className="calculator-container">
            <div className="calculator-input">
                <input className="calculator-input-field" value={input} onChange={input} />
            </div>
            <div className="buttons-container">
                {buttons.map((button) => (
                    <button
                        className="calculator-button"
                        onClick={() => buttonClicked(button.value)}
                    >
                        {button.value}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default Calculator;
