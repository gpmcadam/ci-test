const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('awesome stuff');
});

app.listen(process.env.PORT || 8000);

module.exports = app;
