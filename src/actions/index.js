
//  Action Creator 

import jsonPlaceHolder from "../api/jsonPlaceHolder";
import _ from 'lodash';
//  Named Import 
export const selectSong = (song) => {
    return {
        type: 'SELECT_SONG',
        payload: song
    }
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPost());

    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => {
        dispatch(fetchUser(id))
    })

}

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({
        type: 'FETCH POSTS',
        payload: response.data
    })
}


export const fetchUser = (userId) => async (dispatch) => {
    const response = await jsonPlaceHolder.get(`/users/${userId}`);

    dispatch({
        type: 'FETCH USER',
        payload: response.data
    })
};

// export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${userId}`);

//     dispatch({
//         type: 'FETCH USER',
//         payload: response.data
//     })
// })


// export const fetchPostES = () => {

//     return async function (dispatch) {
//         const response = await jsonPlaceHolder.get('/posts');
//         dispatch({
//             type: 'FETCH POSTS',
//             payload: response
//         })
//     }
// }
