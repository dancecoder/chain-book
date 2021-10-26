import React from "react";
import { Link } from "react-router-dom";
import "./AvatarPage.css";

export const AvatarPage = () => {
    return (
        <div>
            <Link className="home__Icon" to="/">Начало</Link>
            <h3>Имя Фамилия</h3>
            <img/>
            <h4>Данные о пользователе</h4>
        </div>
    )
}