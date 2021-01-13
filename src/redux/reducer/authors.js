import {normalizedAuthors} from "../../fixtures";

const defaultAuthors = normalizedAuthors.reduce(
    (acc, author) => ({
        ...acc,
        [author.id]: author,
    }),
    {}
);

export default (author = defaultAuthors, action) => {
    const { type, payload } = action;

    switch (type) {


        default:
            return author;
    }
};