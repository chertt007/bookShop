import {
    ADD_BOOK_TO_CART,
    ADD_NEW_BOOK, CLEAR_CART,
    EDIT_BOOK,
    LOGIN,
    LOGOUT, ON_FILTER_CHANGE, PURCHASE_ITEMS,
    REMOVE_BOOK, REMOVE_BOOK_FROM_CART, REMOVE_POSITION_FROM_CART,
    SET_ACTIVE_USER_ID,
    SET_ACTIVE_USER_NAME,
    SET_ADMINISTRATOR_ACCESS,
    SET_USER_ACCESS,
    TOGGLE_LOGIN
} from "./constants";


export const loginAction = () => ({
    type: LOGIN,
});
export const logoutAction = () => ({
    type:LOGOUT
})
export const setAdministratorAccess = () => ({
    type: SET_ADMINISTRATOR_ACCESS
})
export const setUserAccess = () => ({
    type:SET_USER_ACCESS
})
export const setActiveUserId = (id) => ({
    type:SET_ACTIVE_USER_ID,
    payload:id
})
export const setActiveUserName =(name)=>({
    type:SET_ACTIVE_USER_NAME,
    payload:name
})
export const addNewBook = (title,authorId,price,publisherId)=> ({
    type:ADD_NEW_BOOK,
    payload: {
    title,
    authorId,
    price,
    publisherId,
    }
})
export const editBook = (title,authorId,price,publisherId,bookId) => ({
    type:EDIT_BOOK,
    payload:{
        title,
        authorId,
        price,
        publisherId,
        bookId,
    }
})
export const removeBook = (bookId) => ({
    type:REMOVE_BOOK,
    payload:bookId
})
export const addBookToCart = (bookId) => ({
    type:ADD_BOOK_TO_CART,
    payload:bookId
})
export const removeBookFromCart = (bookId) => ({
    type: REMOVE_BOOK_FROM_CART,
    payload: bookId
})
export const removePositionFromCart = (bookId) => ({
    type:REMOVE_POSITION_FROM_CART,
    payload:bookId
})
export const onFilterChanges = (filter) => ({
    type:ON_FILTER_CHANGE,
    payload:filter
})
export const clearCart = () => ({
    type: CLEAR_CART
})
export const purchaseItems = (booksArr) => ({
    type: PURCHASE_ITEMS,
    payload:booksArr,

})