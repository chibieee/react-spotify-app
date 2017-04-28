import React, { Component } from 'react';

import SearchBar from './searchbar/searchbar';
import searchSpotify from '../utility/searchspotify';
import SongItem from './songitem/songitem';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
      tracks: {}
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  }

  render() {
    const { tracks } = this.state;
    return (
      <div className="app-root">
        <SearchBar updateText={(songName) => this.setState({ song: songName })} fetchSongs={this.fetchSongs}/>
        {tracks.items && <SongItem songData={tracks.items[0]}/>}
      </div>
    );
  }
}

