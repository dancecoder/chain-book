import React from "react";
import "./App.css";
import "./CountActions"
import CountActions from "./CountActions";

export function App () {
    let counter = 0;
    <div className="AppWork">
        <div className="AppFrame">
            <h1 className="Text">Считалка: {counter}</h1>
            <button onChange={CountActions(counter, 1)}>+1</button>
            <button onClick={CountActions(counter, 2)}>-1</button>
            <p> </p>
            <input type="password"></input>
        </div>
    </div>
};