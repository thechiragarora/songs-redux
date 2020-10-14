import { combineReducers } from 'redux';

const selectedSongReducer = (selectedSong = '', action) => {
    if (action.type === 'SELECTED_SONG') {
        return action.payload;
    }
    return selectedSong;
}

const songsReducer = () => {
    return ([ {name: 'test 1', duration: '10'}, {name: 'test 2', duration: '50'}])
}

export default combineReducers({ songs: songsReducer, selectedSong: selectedSongReducer })
