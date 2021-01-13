import {normalizedUsers} from "../../fixtures";

const defaultUsers = normalizedUsers.reduce(
    (acc, user) => ({
        ...acc,
        [user.id]: user,
    }),
    {}
);

export default (users = defaultUsers, action) => {
    const { type, payload } = action;

    switch (type) {


        default:
            return users;
    }
};