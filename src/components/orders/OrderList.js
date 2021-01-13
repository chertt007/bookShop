import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import OrderItem from "./OrderItem";
import {clearCart, purchaseItems} from "../../redux/actions";

const OrderList =( props )=> {
    const dispatch = useDispatch();
    const ordersState = useSelector(state => state.orders);
    const booksState = useSelector(state  => state.books);
    const orderedBooks = Object.entries(ordersState).map(([key,value]) =>{
        return {
            id: booksState[key].id,
            title: booksState[key].name,
            count:value,
            pricePerBook:booksState[key].price,
            pricePerPosition: value * booksState[key].price,
        }
    } );
    const onPurchaseClickHandler = (booksArr) =>{
        dispatch(clearCart());

        dispatch(purchaseItems(booksArr ));
    }
    const totalSum = +orderedBooks.reduce((acc, {pricePerPosition}) => {
       return  acc+pricePerPosition;
    }, 0)


    return(<>
        <h2>Orders:</h2>
        {orderedBooks.map(book => book.count > 0 ? <OrderItem key={book.id}
                                             id={book.id}
                                             title={book.title}
                                             count={book.count}
                                             pricePerBook={book.pricePerBook}


        /> : null )}
        {totalSum > 0 && <button onClick={()=>{onPurchaseClickHandler(orderedBooks)}}>Purchase</button>}
        <h5>TOTAL : {totalSum} $</h5>

        </>)
}
export default OrderList;