import { combineReducers } from "redux";

const songReducer = () => {
    return [
        { title: 'Song 1', duration: 4.05 },
        { title: 'Song 2', duration: 3.15 },
        { title: 'Song 3', duration: 5.35 },
        { title: 'Song 4', duration: 2.05 },
        { title: 'Song 5', duration: 2.55 },
    ]
}


const selectedSongReducer = (selectedSong = null, action) => {
    switch (action.type) {

        case 'SELECTED_SONG':
            return action.payload;

        default:
            return selectedSong;

    }
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})