import React, {useMemo} from 'react';
import BooksList from "../common/BooksList";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const AdminContainer = () => {
    const isLoggedIn = useSelector(state => state.loggedIn);
    const isAdmin = useSelector(state => state.app.isAdmin);
    const bookState = useSelector(state => state.books);
    const authorsState = useSelector(state => state.authors);
    const publishersState = useSelector(state => state.publishers);
    const filterState = useSelector(state => state.filter.searchBook);



    const publishers = useMemo(()=>{
        return Object.values(publishersState);
    },[publishersState])
    const books = useMemo(()=> {
        return Object.values(bookState).filter(book => book.name.includes(filterState) )
    },[bookState,filterState]);
    const authors =useMemo(()=>{
        return Object.values(authorsState);
    },[authorsState])


    return(
        <>
            <h1>AdminPanel</h1>
            <BooksList books={books}  publishers={publishers} authors={authors}  isAdmin={isAdmin}/>
            </>
    )
}

export default AdminContainer;