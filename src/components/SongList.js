import React from 'react';

const renderSongs = (songs = [], onSongSelect) => {
  return songs.map((song) => {
    const { title } = song;
    return (
      <li className="list-group-item d-flex align-items-center" key={title}>
        <span className="mr-auto">{title}</span>
        <button type="button" className="btn btn-primary float-right" onClick={() => { onSongSelect(song) }}>Select</button>
      </li>
    )
  });
}

const SongList = ({ songs, onSongSelect }) => {
  return (
    <ul className="list-group list-group-flush">{renderSongs(songs, onSongSelect)}</ul>
  );
}

export default SongList;
