// const axios = require('axios');
require('dotenv').config();

// const axiosInstance = axios.create({
//     baseURL: 'https://api.spotify.com/v1',
//     headers: {
//         'Authorization': `Bearer ${process.env.SPOTIFY_TOKEN}`,
//         'Content-Type': 'application/json'  
//     }
// });

const token = process.env.SPOTIFY_TOKEN;
async function fetchWebApi(endpoint, method, req_token, body) {
  const res = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${req_token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

module.exports = {
    fetchWebApi
};