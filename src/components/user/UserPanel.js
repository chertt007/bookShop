import React, {useMemo} from 'react';
import {useSelector} from "react-redux";
import BooksList from "../common/BooksList";
import OrderList from "../orders";
import OrderHistory from "../ordersHistory";

const UserContainer = ({activeName}) => {
    const isLoggedIn = useSelector(state => state.app.loggedIn);
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
        <>  <OrderHistory />
            <OrderList />
            <BooksList isLoggedIn={isLoggedIn} publishers={publishers} authors={authors} books={books} isAdmin={isAdmin}/>
        </>
    )
}

export default UserContainer;
