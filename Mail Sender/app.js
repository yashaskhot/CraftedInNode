const express = require('express');
const app = express();
let PORT = 5000;

const sendMail = require('./sendMail');

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/sendmail', sendMail);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log('Server is running on port 5000');
        });    
    } catch (error) {
        console.log(error);
    }
};

start();
