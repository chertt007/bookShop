import React from 'react';
import PropTypes from 'prop-types';
import {NavLink,Link} from "react-router-dom";
import publishers from "../../redux/reducer/publishers";
import {useDispatch} from "react-redux";
import {addBookToCart, removeBook} from "../../redux/actions";


const Book = ({name, authors, price, id, isAdmin, publisher,btnRemove,isLoggedIn}) => {

    const dispatch = useDispatch();
    const onRemoveBookClickHandler = (id) => {
        dispatch(removeBook(id));
    }
    const onBuyBookClickHandler = (bookId) => {
        dispatch(addBookToCart(bookId))
    }

    return (
        <div>

            <NavLink to={`/books/${id}`} ><h4>Title : {name}</h4></NavLink>
            <p>Price : {price}</p>
            <p>Publisher: {publisher.name}</p>
            {authors.map(author => <p key={author.id}>Author : {author.name}</p>)}

                {isAdmin && btnRemove && <button onClick={()=> onRemoveBookClickHandler(id)}>Remove</button>}
                {isAdmin && <NavLink to={`/edit/${id}`}><button>Edit</button></NavLink>}
                {isLoggedIn && !isAdmin && <button onClick={()=>{onBuyBookClickHandler(id)}}>Buy</button>}

            {  <NavLink to={`/books/${id}`}>
                <button>Learn more about this book...</button>
            </NavLink>}
        </div>
    )
}
Book.propTypes = {
    name: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number
}
export default Book;
