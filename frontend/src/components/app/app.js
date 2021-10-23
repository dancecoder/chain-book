import "./app.css";

export function App () {
    let counter = 0;
    return (
        <div className="AppWork">
            <div className="AppFrame">
                <h1 className="Text">Считалка: {counter}</h1>
                <input type="password"></input>
            </div>
        </div>
    );
};
