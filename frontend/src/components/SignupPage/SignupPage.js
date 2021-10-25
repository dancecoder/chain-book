import React from "react";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";

const validate = values => {
    const errors = {};
    
    if (!values.fullname) {
        errors.fullname = "Как Вас зовут?";
    } else if (!values.fullname.includes(" ")) {
        errors.fullname = "Формат ввода имеет вид: Имя Фамилия"
    }

    if (!values.nickname) {
        errors.nickname = "Введите никнейм";
    } 

    if (!values.password) {
        errors.password = "Придумайте хороший пароль!";
    } else if (values.password.length < 6 || values.password.length > 15) {
        errors.password = "Пароль должен иметь длину от 6 до 15 символов!";
    }

    if (!values.repeatPassword) {
        errors.repeatPassword = "Повторите пароль!";
    } else if (values.repeatPassword != values.password) {
        errors.repeatPassword = "Пароли должны совпадать!";
    }

    return errors;
};

export function SignupPage () {
    const formik = useFormik({
        initialValues: {
            fullname: "",
            nickname: "",
            password: "",
            repeatPassword: ""
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Link className="home__Icon" to="/">НАЧАЛО</Link>
            <p></p>
            <label htmlFor="fullname" className="atribut__text__signup">ИМЯ И ФАМИЛИЯ</label>
            <p> </p> 
            <input
                id="fullname"
                name="fullname"
                className="inputs__signup"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fullname}
            /> {formik.errors.fullname ? <div className="errors__signup">{formik.errors.fullname}</div> : null} 
            <p> </p>

            <label htmlFor="nickname" className="atribut__text__signup">ИМЯ ПОЛЬЗОВАТЕЛЯ</label>
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

            <label htmlFor="password" className="atribut__text__signup">ПАРОЛЬ</label>
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

            <label htmlFor="repeatPassword" className="atribut__text__signup">ПОВТОР ПАРОЛЯ</label>
            <p> </p>
            <input
                id="repeatPassword"
                name="repeatPassword"
                className="inputs__signup"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
            /> {formik.errors.repeatPassword ? <div className="errors__signup">{formik.errors.repeatPassword}</div> : null} 
            <p> </p>
            <Link className="sumbit__signup">РЕГИСТРАЦИЯ</Link>
        </form>
    )

}