import React from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';

export function MainPage () {
    return (
        <nav>
            <ul>
                <li><Link to='/login'>Вход</Link></li>
            </ul>
            <ul>
                <li><Link to='/signup'>Регистрация</Link></li>
            </ul>
        </nav>
    );
}
