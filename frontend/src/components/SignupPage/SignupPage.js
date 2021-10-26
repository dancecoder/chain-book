import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "./SignupPage.css";

function validate(values) {
    const errors = {};
    
    if (!values.fullname) {
        errors.fullname = "Как Вас зовут?";
    } else if (!values.fullname.length > 20) {
        errors.fullname = "Имя входа не должно превосходить 20 символов";
    }

    if (!values.nickname) {
        errors.nickname = "Введите логин для входа";
    } 

    if (!values.password) {
        errors.password = "Придумайте хороший пароль";
    } else if (values.password.length < 6) {
        errors.password = "Пароль должен иметь от 6 символов";
    }

    if (!values.repeatPassword) {
        errors.repeatPassword = "Повторите пароль";
    } else if (values.repeatPassword != values.password) {
        errors.repeatPassword = "Пароли должны совпадать";
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
            <Link className="home__Icon" to="/">Начало</Link>
            <p></p>
            <label htmlFor="fullname" className="atribut__text__signup">Имя и фамилия</label>
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

            <label htmlFor="repeatPassword" className="atribut__text__signup">Повтор пароля</label>
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
            <Link className="sumbit__signup">Регистрация</Link>
        </form>
    )

}