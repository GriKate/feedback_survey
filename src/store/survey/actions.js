

export const setNewRating = (num) => ({
    type: 'setRating',
    num
});

export const setResponse = (answers) => ({
    type: 'setResponse',
    answers
});

export const setDone = () => ({
    type: 'setDone'
});