import React, {useState} from 'react';


import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {
    loginAction,
    setActiveUserId,
    setActiveUserName,
    setAdministratorAccess,
    setUserAccess,
    toggleLogIn
} from "../../../redux/actions";
import {Redirect} from "react-router-dom";

export default function LoginForm() {
    const[message, setMessage] = useState('');
    const dispatch = useDispatch();
    const usersState = useSelector(state => state.users);
    const users = Object.values(usersState);


    const { register, handleSubmit, watch, errors , reset} = useForm();
    const onSubmit = data => {
       const {login , password} = data;
       const filteredUser = users.find(user => user.name===login && user.password === password);
       if(filteredUser){
           const{id, isAdmin, name} = filteredUser;
           dispatch(setActiveUserId(id));
           dispatch(setActiveUserName(name))
           if(isAdmin){
               dispatch(setAdministratorAccess());
               dispatch(loginAction());

           }
            if(!isAdmin){

                dispatch(setUserAccess());
                dispatch(loginAction());
            }
           localStorage.setItem('login', JSON.stringify(login));
           localStorage.setItem('password', JSON.stringify(password));
           localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
           localStorage.setItem('id', JSON.stringify(id));
           localStorage.setItem('name', JSON.stringify(name));
           reset();

       }else{
           reset();
           setMessage('login or password are incorrect');
       }


    };


    return (<>
            {message}
    <form onSubmit={handleSubmit(onSubmit)}>

        <input placeholder='login' name="login" ref={register({required:true})} />
        {errors.login && <span>This field is required</span>}
        <input placeholder='password' name="password" ref={register({ required: true })} />
        {errors.password && <span>This field is required</span>}


        <input type="submit" />
    </form>
        </>
);
}