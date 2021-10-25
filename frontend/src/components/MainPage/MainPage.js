import React from "react";
import { Link } from "react-router-dom";


export const MainPage = () => {
    return (
        <div>
            <h1 className="HomeText">Добро пожаловать в Chainbook!</h1>
            <Link className="button__signup" to="/signup">РЕГИСТРАЦИЯ</Link>
            <Link className="button__signup" to="/login">АВТОРИЗАЦИЯ</Link>
        </div>
    )
}