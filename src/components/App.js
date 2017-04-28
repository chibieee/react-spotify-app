import React, { Component } from 'react';

import SearchBar from './searchbar/searchbar';
import searchSpotify from '../utility/searchspotify';
import SongItem from './songitem/songitem';

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
    console.log(tracks);
    return (
      <div>
        <SearchBar updateText={(songName) => this.setState({ song: songName })} fetchSongs={this.fetchSongs}/>
        {tracks.items && <SongItem songData={tracks.items[0]}/>}
      </div>
    );
  }
}

