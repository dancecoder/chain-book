import React from "react";
import { Link } from "react-router-dom";

export const AvatarPage = () => {
    return (
        <div>
            <Link className="home__Icon" to="/">НАЧАЛО</Link>
            <p></p>

            <h1>Имя Фамилия</h1>
            <img/>
            <h3>Данные о пользователе</h3>
        </div>
    )
}