const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH USER':
            return [...state, action.payload]
        default:
            return state;
    }
};

export default userReducer;