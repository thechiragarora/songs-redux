import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
  const { songs, selectedSong } = props;
  return (
    <div>
      <ol>
        {songs.map((song) => (
          <li>
            {song.name}{" "}
            <button onClick={() => props.selectSong(song)}>
              click to select
            </button>
          </li>
        ))}
      </ol>

      {selectedSong && (
        <div>
          Selected Song is : {selectedSong.name} with duration: {selectedSong.duration}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { songs, selectedSong } = state;
  return { songs, selectedSong };
};

export default connect(mapStateToProps, { selectSong })(SongList);
