
//  Action Creator 
//  Named Import 
export const selectSong = (song) => {
    return {
        type: 'SELECT_SONG',
        payload: song
    }
}

export const fetchPost = () => {
    return {
        type: 'FETCH POSTS'
    }
}