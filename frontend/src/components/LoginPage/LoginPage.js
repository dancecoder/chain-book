import React, {useState, useEffect} from "react";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";
import {axios} from "axios";
import "./LoginPage.css";

const validate = values => {
    const errors = {};

    if (!values.nickname) {
        errors.nickname = "Введите имя для входа";
    } 

    if (!values.password) {
        errors.password = "Введите Ваш пароль";
    }

    return errors;
};

export function LoginPage () {
    const formik = useFormik({
        initialValues: {
            nickname: "",
            password: "",
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    useState({
        name: "",
    })

    LoginPage.handleChange = event => {
        this.setState({ name: event.target.value });
      }
    
      LoginPage.handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.name
        };
    
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Link className="home__Icon" to="/">Начало</Link>
            <p></p>

            <label htmlFor="nickname" className="atribut__text__signup">Имя пользователя</label>
            <p> </p>
            <input
                id="nickname"
                name="nickname"
                className="inputs__signup"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nickname}
            /> {formik.errors.nickname ? <div className="errors__signup">{formik.errors.nickname}</div> : null} 
            <p></p>

            <label htmlFor="password" className="atribut__text__signup">Пароль</label>
            <p></p>
            <input
                id="password"
                name="password"
                className="inputs__signup"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            /> {formik.errors.password ? <div className="errors__signup">{formik.errors.password}</div> : null} 
            <p> </p>

            <Link className="sumbit__login" to="/{username}">Вход</Link>
        </form>
    )

}