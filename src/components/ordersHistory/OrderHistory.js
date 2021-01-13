import React from 'react';
import {useSelector} from "react-redux";

const OrderHistory =(props)=>{
    const purchasesState = useSelector(state => state.purchases);
    const {items} = purchasesState;

    return(<>
        <h3>OrderHistory :</h3>
        {items.map((array,index) => {
           return <div key={index}>

               <h4>PURCHASE:</h4>{array.map(order => {
               return(<div key={order.id}>

                   <p>Title: {order.title}</p>
                   <p>Price for item: {order.pricePerBook}</p>
                   <p>Quantity:{order.count}</p>

               </div>)
           })}
           <hr/>
           </div>
        })}
        </>)
}
export default OrderHistory;

