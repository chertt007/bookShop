import React, {useMemo} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Book from "./Book";
const BooksContainer = (props) => {

    const {id}= useParams();
    const book = useSelector(state => state.books[id]);
    const isAdmin = useSelector(state => state.app.isAdmin);
    const authorsState = useSelector(state => state.authors);
    const publishersState = useSelector(state => state.publishers);
    const publisher = publishersState[book.publishers[0]];
    const authors = useMemo(()=>{

        return Object.values(authorsState);
    },[authorsState])
    const filteredAuthors = authors.filter(author => book.authors.includes(author.id));

    return(
        <>
            <h2>Book description :</h2>
            <Book key={book.id}
                  id={book.id}
                  name={book.name}
                  price={book.price}
                  authors={filteredAuthors}
                  publisher={publisher}
                  isAdmin={isAdmin}
                  btnRemove={false}
            />
        </>
    )
}


export default  BooksContainer;