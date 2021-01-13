import {normalizedBooks} from "../../fixtures";
import {ADD_NEW_BOOK, EDIT_BOOK, REMOVE_BOOK} from "../constants";

const defaultBooks = normalizedBooks.reduce(
    (acc, book) => ({
        ...acc,
        [book.id]: book,
    }),
    {}
);

export default (books = defaultBooks, action) => {
    const { type, payload } = action;

    switch (type) {

        case ADD_NEW_BOOK:
            const{title,authorId,price,publisherId,bookId} = payload;

            return {...books, [bookId]: {
                    authors:[authorId],
                    id:bookId,
                    name:title,
                    price:price,
                    publishers:[publisherId],
                    users:[],

                },
                }
        case REMOVE_BOOK:
            const newBooks = {...books};
            delete newBooks[payload];
            return newBooks;
        case EDIT_BOOK:

            return {
                ...books,[payload.bookId]:{
                   ...books[payload.bookId],
                    authors:payload.authorId,
                    name:payload.title,
                    price:payload.price,
                    publishers:[payload.publisherId]
                }
            }

        default:
            return books;
    }
};
