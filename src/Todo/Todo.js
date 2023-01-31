import React, { useState } from "react";
import "./Todo.css";

function Todo() {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const add = () => {
        setTodoList([...todoList]);
        console.log(todoList);
    };
    return (
        <div className="todo">
            <input
                className="input"
                type="text"
                onChange={(event) => setInput(event.target.value)}
            />
            <button className="add" onClick={() => add()}>
                +
            </button>

            <div>
                <p>{todoList.map((value) => {})}</p>
            </div>
        </div>
    );
}

export default Todo;
