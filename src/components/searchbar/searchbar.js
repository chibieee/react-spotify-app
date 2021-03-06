import React, { PropTypes } from 'react'
import './SearchBar.css';

const SearchBar = (props) => (
    <div className="searchbar-root">
        <input className="searchbar-input" type="text" onChange={ (e) => props.updateText(e.target.value)} placeholder="Search for an artist or song"/>
        <button className="searchbar-button" onClick={props.fetchSongs}>Get Songs</button>
    </div>
);

SearchBar.propTypes = {
    updateText: PropTypes.func,
    fetchSongs: PropTypes.func
}

export default SearchBar;
    
