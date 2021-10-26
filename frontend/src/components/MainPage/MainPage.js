import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";

export function MainPage({route}) {
    MainPage.defaultProps = {
        route: null
    };
    return (
        <div className="AppWork">
            <div id="appframe" className="AppFrame">
                <div>{renderRoutes(route.routes)}</div>
                <h1 className="HomeText">Добро пожаловать в Chainbook!</h1>
                <Link className="button__signup" to="/signup">Регистрация</Link>
                <Link className="button__signup" to="/login">Вход</Link>
            </div>
        </div>
    )
}