import React from 'react';
import {useDispatch} from "react-redux";
import {addBookToCart, removeBookFromCart, removePositionFromCart} from "../../redux/actions";

const OrderItem =({id,title,count,pricePerBook,}) =>{
    const dispatch = useDispatch();
    const onPlusClickHandler = (bookId) => {
        dispatch(addBookToCart(bookId));
    }
    const onMinusClickHandler = (bookId) => {
        dispatch(removeBookFromCart(bookId));
    }
    const onRemoveClickHandler = (bookId) => {
        dispatch(removePositionFromCart(bookId))
    }
    return(<>
        <div>
            Order name : {title}  / quantity : {count} / price : {pricePerBook}$
            <button onClick={()=>{onPlusClickHandler(id)}}>+</button>
            <button onClick={()=>{onMinusClickHandler(id)}}>-</button>
            <button onClick={()=>{onRemoveClickHandler(id)}}>remove</button>

        </div>
        <br/>
        </>)
}
export default OrderItem;