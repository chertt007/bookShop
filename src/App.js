import React from 'react'
import './App.css';
import Login from "./components/login";
import UserContainer from "./components/user";
import AdminContainer from "./components/admin";
import {useSelector} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route, NavLink, Redirect,

} from "react-router-dom";
import BookContainer from "./components/common/BookContainer";
import AddBook from "./components/addBook";



 const App = ( ) =>  {
    //todo localStorage token
    const appState = useSelector(state => state.app);
    const {loggedIn,activeId, isAdmin,activeName} = appState;
    console.log(loggedIn, activeId,isAdmin)



  return (


      <Router>
          <header>
              <NavLink to='/'><h2>LOGO</h2></NavLink>
              {loggedIn ?  <div>
                  <h3>Your Name : {activeName} </h3>
                  <h3>Your Role : {isAdmin ? 'Administrator' : 'User'}
                  </h3>
              </div> : <h3>HI Guest, please sign in to get access to service</h3>}

           <NavLink to='/login'><button>{loggedIn ? 'log out' : 'sign in'}</button></NavLink>
          </header>

      <Switch>
          <Route path='/' exact render={()=>{
              if(isAdmin && loggedIn){
                  return <Redirect to='/admin'/>
              }
              if(!isAdmin && loggedIn){
                  debugger
                  return <Redirect to='/user'/>
              }
              return <h2>Public Container</h2>
          }} />
          <Route path='/login' exact render={()=> {
              if(isAdmin && loggedIn){
                  return <Redirect to='/'/>
              }
              if(!isAdmin && loggedIn){
                  debugger
                  return <Redirect to='/'/>
              }
             return <Login/>
          }} />
          <Route path='/admin' exact render={()=>{
              return <AdminContainer />
          }} />
          <Route path='/user' exact render={()=>{
              return <UserContainer />
          }} />
          <Route path='/books/:id' exact render={()=> {
              return <BookContainer />
          }}/>
          <Route path='/add/book' exact render={()=>{
              return <AddBook />
          }}/>
          <Route path='/add/author'  exact render={()=>{
              return (<h1>Adding authors function in development </h1>)
          }}/>
          <Route path='/add/publisher' exact render={()=>{
              return (<h1>Adding publishers function in development </h1>)
          }}/>
      </Switch>
      </Router>
);
}

export default App;
