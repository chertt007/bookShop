import {combineReducers} from "redux";
import app from "./app";
import users from "./users";
import books from "./books";
import authors from "./authors";
import publishers from "./publishers";
import orders from "./orders";
import filter from "./filter";
import purchases from "./purchases";

export default combineReducers({
    app,
    users,
    books,
    authors,
    publishers,
    orders,
    filter,
    purchases
})