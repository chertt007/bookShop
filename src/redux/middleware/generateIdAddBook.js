import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
    if (action.type === 'ADD_NEW_BOOK') {
        const newBookId = uuidv4();
        action.payload.bookId = newBookId;
        next(action);
    } else {
        next(action);
    }
};