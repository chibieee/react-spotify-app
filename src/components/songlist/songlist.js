import React, { PropTypes } from 'react';
import './songlist.css';

const eachSong = (props) => {
    const { album, name } = props;
    const albumImage = album.images[0];
    return (
        <div className="songlist-item">
            <img alt="listitem" src={albumImage.url} className="songlist-img" />
            <span className="songlist-description">Name: {name}</span>
        </div>
    )
};

eachSong.PropTypes = {
    album: PropTypes.object,
    name: PropTypes.string
};

const SongList = (props) => (
    <div className="songlist-root">
        {props.listOfSongs.map((songData, index) =>
            <div
                key={songData.uri}
                onClick={() => props.selectSong(index)}>

                {eachSong(songData)}
            </div>
        )}
    </div>
);

SongList.propTypes = {
    listOfSongs: PropTypes.array,
    selectSong: PropTypes.func
};

export default SongList;