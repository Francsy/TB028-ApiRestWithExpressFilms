const nodefetch = require('node-fetch')
const fetch = async (title, apikey) => {
    let res = await nodefetch(`https://www.omdbapi.com/?t=${title}&apikey=${apikey}`);
    let filmdata = await res.json();
    return filmdata;
}

module.exports = fetch;