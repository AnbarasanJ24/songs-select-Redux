const postReducer = (state = [], action) => {
    console.log("Action", action)
    switch (action.type) {
        case 'FETCH POSTS':
            return action.payload;
        default:
            return state;
    }
};

export default postReducer;