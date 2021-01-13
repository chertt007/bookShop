import {ADD_BOOK_TO_CART, CLEAR_CART, REMOVE_BOOK_FROM_CART, REMOVE_POSITION_FROM_CART} from "../constants";

const defaultOrders = {};


export default (orders = defaultOrders, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_BOOK_TO_CART:
            return {
                ...orders, [payload]: (orders[payload] || 0) + 1
            }
        case REMOVE_BOOK_FROM_CART:
            return{
                ...orders,
                [payload]: Math.max((orders[payload] || 0) - 1, 0),
            }
        case REMOVE_POSITION_FROM_CART:
            return {
                ...orders,
                [payload]: 0
            }
        case CLEAR_CART:
            return {}
        default:
            return orders;
    }
};