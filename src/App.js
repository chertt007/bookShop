import React, {useEffect} from 'react'
import './App.css';
import Login from "./components/login";
import UserContainer from "./components/user";
import AdminContainer from "./components/admin";
import {useDispatch, useSelector} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route, NavLink, Redirect,

} from "react-router-dom";
import BookContainer from "./components/common/BookContainer";
import AddBook from "./components/addBook";
import Header from "./components/header";
import Logout from "./components/logout";
import EditBook from "./components/editBook";
import GuestContainer from "./components/guest";
import {loginAction, setActiveUserId, setActiveUserName, setAdministratorAccess, setUserAccess} from "./redux/actions";



 const App = ( ) =>  {
     const dispatch = useDispatch();
     useEffect(()=>{
       const isAdmin =  JSON.parse(localStorage.getItem('isAdmin'))
       const id =  localStorage.getItem('id');
       const name =  localStorage.getItem('name');

            if(id && name){
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
            }

     },[]);
    const appState = useSelector(state => state.app);
    const {loggedIn,activeId, isAdmin,activeName} = appState;


    const checkIsLogin = (status) => {
        if(!status){
            return <Redirect to='/' />
        }
    }
  return (


      <Router>
              <Header isAdmin={isAdmin} loggedIn={loggedIn} activeName={activeName}/>
      <Switch>
          <Route path='/' exact render={()=>{
              if(loggedIn && isAdmin){
                  return <Redirect to='/admin'/>
              }
              if(loggedIn && !isAdmin  ){

                  return <Redirect to='/user'/>
              }
              return <GuestContainer />
          }} />
          <Route path='/login' exact render={()=> {
              if(isAdmin && loggedIn){
                  return <Redirect to='/'/>
              }
              if(!isAdmin && loggedIn){

                  return <Redirect to='/'/>
              }
             return <Login/>
          }} />


          <Route path='/admin' exact render={()=>{
              if(!loggedIn){
                  return <Redirect to='/' />
              }
              return <AdminContainer />
          }} />
          <Route path='/user' exact render={()=>{
              if(!loggedIn){
                  return <Redirect to='/' />
              }
              return <UserContainer activeName={activeName} />
          }} />

          <Route path='/edit/:id' exact render={()=>{
              if(!loggedIn){
                  return <Redirect to='/' />
              }
              return<EditBook />
          }}/>
          <Route path='/add/book' exact render={()=>{
              if(!loggedIn){
                  return <Redirect to='/' />
              }
              return <AddBook />
          }}/>
          <Route path='/books/:id' exact render={()=> {

              return <BookContainer />
          }}/>
          <Route path='/add/author'  exact render={()=>{
              if(!loggedIn){
                  return <Redirect to='/' />
              }
              return (<h1>Adding authors function in development </h1>)
          }}/>
          <Route path='/add/publisher' exact render={()=>{
              if(!loggedIn){
                  return <Redirect to='/' />
              }
              return (<h1>Adding publishers function in development </h1>)
          }}/>
         {/* <Route path='/logout' exact render={()=>{

          }}/>*/}
      </Switch>
      </Router>
);
}

export default App;
