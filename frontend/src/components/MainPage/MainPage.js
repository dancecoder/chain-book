import React from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';
import { apiFactory } from 'plain-http-client';

export function MainPage () {
    const client = apiFactory('/api');
    client.users(1).get().then(console.log).catch(console.error);
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
