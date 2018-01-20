const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; // heroku knows how to start it with the port

app.use(express.static(publicPath));
// Transfers the file at the given path.
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// running server with port -> command (node server/server.js)
app.listen(port, () => {
    console.log('Server is up');
})