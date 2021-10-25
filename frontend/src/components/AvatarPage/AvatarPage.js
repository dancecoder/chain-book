import React from "react";
import { Link } from "react-router-dom";

export function AvatarPage(props) {
    const avatarName = props.match.params.avatarName;
    return (
        <div>
            <Link to='/'>На главную страницу</Link>
            <h2>Страница Аватара</h2>
            <span>{avatarName}</span>
        </div>
    );
}
