const { fetchWebApi } = require('../utils');

const getTopTracks = async (count=10, token) => {
    try {
        const res = await fetchWebApi(`me/top/tracks?limit=${count}`, 'GET', token);
        // console.log("items: ", res.items[0]);
        // if (res &&  res.items) {
        //     let data =  res.items.map((item) => {
        //         return {
        //             artists: item.artists,
        //             type: item.type,
        //             track_number: item.track_number,
        //             popularity: item.popularity,
        //             name: item.name,
        //             is_playable: item.is_playable,
        //             id: item.id,
        //             duration_ms: item.duration_ms,
        //             external_urls: item.external_urls,
        //             href: item.href,
        //             uri: item.uri,
        //         }
        //     })
        //     console.log(data);
        //     return data;
        // }

        // else return [];
        return res;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getTopTracks
};