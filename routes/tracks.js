const express = require('express');
const { getTopTracks } = require('../services/tracks');

const router = express.Router();


router.get('/', async (req, res) => {
    const { count='10' } = req.query;
    const token = req.authorization.split(" ")[1];
    // console.log(token);
    try {
        const data = await getTopTracks(parseInt(count, 10), token);
        // if (!data || data.length === 0) {
        //     return res.status(404).json({ error: 'No top tracks found' });
        // }
        console.log("Top tracks data: ", data);
        res.status(200).json({data});
    } catch (error) {
        console.error('Error fetching top tracks:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        
    }
});

router.get('/currently-playing', async (req, res) => {
    try {
        
    } catch (error) {
        console.error('Error fetching currently playing track:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = router;