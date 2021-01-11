import React from 'react'
import './App.css';
import Login from "./components/login";
import UserContainer from "./components/user";
import AdminContainer from "./components/admin";
import {useSelector} from "react-redux";

function App() {

    const appState = useSelector(state => state.app);
    const {loggedIn,activeId, isAdmin} = appState;
    console.log(loggedIn, activeId,isAdmin)

    const renderEl = () => {

        if(loggedIn && !isAdmin){
            return <UserContainer />
        }
        if(loggedIn && isAdmin){
            return <AdminContainer />
        }
        return <Login />
    }

  return (
    renderEl()
);
}

export default App;
