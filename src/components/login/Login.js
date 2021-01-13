import React from 'react';
import LoginForm from "./loginForm";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = () => {

    return(
        <>
            <h1>Login</h1>
            <LoginForm />
            </>
    )
}

export default Login;
