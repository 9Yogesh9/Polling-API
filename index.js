const express = require('express');
const port = 8000;
const app = express();
const dataBase = require('./config/mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', require('./routes'));

app.listen(port, (err) => {
    if (err) {
        console.log(`Choked up ! Unable to start server : ${err}`);
        return;
    }
    console.log(`Server will be serving you at port : ${port}`);
})