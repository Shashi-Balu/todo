import React, { useState } from "react";
import "./Todo.css";

function Todo() {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setInput(newValue);
    };
    const add = () => {
        const items = [...list];
        items.unshift({ text: input });
        setList(items);
        console.log(items);
        setInput("");

        list.push(items);
        localStorage.setItem("list", JSON.stringify(items));
    };

    localStorage.getItem("lists");
    return (
        <div className="todo">
            <input onChange={handleChange} value={input} />
            <button onClick={add}>+</button>
            <ul>
                {list.map((value) => (
                    <li>{value.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
