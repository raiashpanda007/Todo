import React, { useState } from "react";
import '../App.css';
import { useTodo } from '../context/index';

const ListCreator = () => {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = () => {
        if (!todo) return;
        addTodo({ todoName: todo, completed: false });
        setTodo("");
    };

    return (
        <>
            <div className="MainHeading">
                <h1>Manage Your To-Do's</h1>
            </div>
            <div className="InputTodo">
                <input placeholder="Enter Your To-Do's" type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
                <button onClick={add}>Create</button>
            </div>
        </>
    );
};

export default ListCreator;
