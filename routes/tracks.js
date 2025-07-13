const express = require('express');
const { getTopTracks } = require('../services/tracks');

const router = express.Router();


router.get('/top-tracks', async (req, res) => {
    try {
        const data = await getTopTracks(10);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching top tracks:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        
    }
});


module.exports = router;