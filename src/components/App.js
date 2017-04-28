import React, { Component } from 'react';

import SearchBar from './searchbar/searchbar';
import searchSpotify from '../utility/searchspotify';
import SongItem from './songitem/songitem';
import SongList from './songlist/songlist';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
      tracks: {},
      songPosition: 0
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  }

  render() {
    const { tracks, songPosition } = this.state;
    return (
      <div className="app-root">
        <SearchBar updateText={(songName) => this.setState({ song: songName })} fetchSongs={this.fetchSongs}/>
        {tracks.items && <SongItem songData={tracks.items[songPosition]}/>}
        {tracks.items && <SongList listOfSongs={tracks.items} selectSong={(songPosition) => this.setState({ songPosition })} />}
      </div>
    );
  }
}

