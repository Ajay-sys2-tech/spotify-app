const express = require('express');
const trackRoutes = require('./routes/tracks');
const authRoutes = require('./routes/auth');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Spotify integration");
})

app.use("/spotify/auth", authRoutes);
app.use('/spotify/tracks', trackRoutes);



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})