import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import Book from "../common/Book";
import {useDispatch} from "react-redux";
import {logoutAction} from "../../redux/actions";



const Header = ({loggedIn,activeName,isAdmin}) => {
    const dispatch = useDispatch();
    const [role,setRole] = useState('');
    useEffect(()=>{
        if(loggedIn && isAdmin){
            setRole('administrator');
        }
        if(loggedIn && !isAdmin ){
            setRole('user');
        }
        if(!loggedIn && !isAdmin){
            setRole('guest');
        }
    },[loggedIn,isAdmin])

    const onLogOutClickHandler =()=>{
        localStorage.clear();
        dispatch(logoutAction());
    }
    return (
        <header>
            <NavLink to='/'><h2>LOGO - back to main page</h2></NavLink>
            {loggedIn ?  <div>
                <h3>Your Name : {activeName} </h3>
                <h3>Your Role : {role}
                </h3>
            </div> : <div><h3>HI Guest, you are able to browse our library.
                Please sign in to get access to service</h3>
                <h5>Administrator - login: admin/ password :admin</h5>
                <h5>User - login: user1/ password : user</h5>
                </div>}

            {!loggedIn && <NavLink to={`/login`}>
                <button>Sign in</button>
            </NavLink>}
            {loggedIn && <button onClick={()=>{onLogOutClickHandler()}}>Sign out</button>}
        <hr/>
        </header>
    )
}
Header.propTypes = {
    activeName: PropTypes.string,
    loggedIn: PropTypes.bool,
    isAdmin: PropTypes.bool
}
export default Header;
