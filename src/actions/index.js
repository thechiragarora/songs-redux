const selectSong = (song) => {
    return {
        type: 'SELECTED_SONG',
        payload: song,
    }
};

export { selectSong };
