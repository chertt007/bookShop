import {applyMiddleware, createStore} from "redux";
import reducer from './reducer'
import logger from "./middleware/logger";
import generateIdAddBook from "./middleware/generateIdAddBook";

const store = createStore(reducer, applyMiddleware(logger,generateIdAddBook));
export default store;