import React from "react";
import { Link } from "react-router-dom";

export function LoginPage() {
    return (
        <div>
            <Link to='/'>На главную страницу</Link>
            <h2>Вход в систему</h2>
        </div>
    );
}
