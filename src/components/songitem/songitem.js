import React, { PropTypes } from 'react';
import './songitem.css';

const SongItem = (props) => {
    const { songData } = props;
    const album = songData.album;
    const albumName = album.name;
    const albumImage = album.images[1];

    return (
        <div className="songitem-root">
            <div className="songitem-album">
                <img alt="album" role="presentation" src={albumImage.url} />
                <span className="songitem-albumName">{albumName}</span>
            </div>
            <div className="songitem-songAndDescription">
                <span className="songitem-songDescription">Name: {songData.name}</span>
                <span className="songitem-songDescription">Duration: {songData.duration_ms / 1000}s</span>
                <audio controls src={songData.preview_url}/>
            </div>
        </div>
    )
};

SongItem.propTypes = {
    songData: PropTypes.object
};

export default SongItem;
