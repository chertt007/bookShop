import React from 'react'
import './App.css';
import Login from "./components/login";
import UserContainer from "./components/user";
import AdminContainer from "./components/admin";
import {useSelector} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



 const App = ( ) =>  {

    const appState = useSelector(state => state.app);
    const {loggedIn,activeId, isAdmin} = appState;
    console.log(loggedIn, activeId,isAdmin)



  return (
      <Router>


      <Switch>
          <Route path='/' exact render={()=>{
              if(loggedIn && isAdmin){
                  return <AdminContainer />
              }
              if(loggedIn && !isAdmin){
                  return <UserContainer />
              }
              return <Login />
          }} />
          <Route path='/admin' exact render={()=>{
              return <AdminContainer />
          }} />
          <Route path='/user' exact render={()=>{
              return <UserContainer />
          }} />
      </Switch>
      </Router>
);
}

export default App;
