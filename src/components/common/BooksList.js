import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {onFilterChanges} from "../../redux/actions";

const BooksList = ({ books, authors, isAdmin, publishers,isLoggedIn }) => {
    const dispatch = useDispatch();

    const onInputChangeHandler = (event) => {
      const filter = event.target.value.toLowerCase();
      dispatch(onFilterChanges(filter))
    }


    return(
        <>




            {isAdmin && <div><NavLink to={`/add/book`}>
                <button>ADD NEW BOOK</button>
            </NavLink></div>}
                <hr />
            Search : <input  onChange={(event)=> {onInputChangeHandler(event)}} placeholder='search by title' />

            <h3>Library:</h3>
            {books.map(book => {

                const filteredAuthors = authors.filter(author => book.authors.includes(author.id));
                const [filteredPublisher] = publishers.filter(publisher => book.publishers.includes(publisher.id))
                return <Book key={book.id}
                             id={book.id}
                      name={book.name}
                      price={book.price}
                      authors={filteredAuthors}
                      publisher={filteredPublisher}
                             isAdmin={isAdmin}
                             btnRemove={true}
                             isLoggedIn={isLoggedIn}

                            />
            }  )}

            </>
    )
}

BooksList.propTypes = {
    books: PropTypes.array
};
export default  BooksList;