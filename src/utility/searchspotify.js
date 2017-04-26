import axios from 'axios'

const searchSpotify = (searchItem) => new Promise((res, rej) => {
    const result = axios.get(`https://api.spotify.com/v1/search?q=${searchItem}&type=track`);

    result
        .then(({ data }) => res(data))
        .catch((err) => rej(err));
});

export default searchSpotify;
