import {PURCHASE_ITEMS} from "../constants";

const defaultPurchases = {
    items:[]
};


export default (purchases = defaultPurchases, action) => {
    const { type, payload } = action;

    switch (type) {
        case PURCHASE_ITEMS:
            return {...purchases, items:[...purchases.items ,payload]}
        default:
            return purchases;
    }
};
