
//  Action Creator 

import jsonPlaceHolder from "../api/jsonPlaceHolder"

//  Named Import 
export const selectSong = (song) => {
    return {
        type: 'SELECT_SONG',
        payload: song
    }
}

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({
        type: 'FETCH POSTS',
        payload: response.data
    })
}

export const fetchPostES = () => {

    return async function (dispatch, getState) {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({
            type: 'FETCH POSTS',
            payload: response
        })
    }
}

export const fetchUser = (userId) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/user/${userId}`);

    dispatch({
        type: 'FETCH USER',
        payload: response.data
    })
}