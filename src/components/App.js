import React, { Component } from 'react';

import SearchBar from './searchbar/searchbar';
import searchSpotify from '../utility/searchspotify';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: ''
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then((tracks) => console.log(tracks));
  }

  render() {
    const { initialMessage, song } = this.state;
    console.log(song);
    return (
      <div>
        {initialMessage}
        <SearchBar updateText={(songName) => this.setState({ song: songName })} fetchSongs={this.fetchSongs}/>
      </div>
    );
  }
}

