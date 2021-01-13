import {normalizedPublishers} from "../../fixtures";

const defaultPublishers = normalizedPublishers.reduce(
    (acc, publisher) => ({
        ...acc,
        [publisher.id]: publisher,
    }),
    {}
);

export default (publishers = defaultPublishers, action) => {
    const { type, payload } = action;

    switch (type) {


        default:
            return publishers;
    }
};