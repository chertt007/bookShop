import {ON_FILTER_CHANGE} from "../constants";


export default (filter = {searchBook:''}, action) => {
    const { type, payload } = action;

    switch (type) {
        case ON_FILTER_CHANGE:
            return {
                ...filter, searchBook: payload
            }
               default:
            return filter;
    }
};
