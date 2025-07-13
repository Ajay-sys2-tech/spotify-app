const { fetchWebApi } = require('../utils');

const getTopTracks = async (count=10) => {
    try {
        const res = await fetchWebApi(`me/top/tracks?limit=${count}`, 'GET');
        // console.log(res);
        return res;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getTopTracks
};