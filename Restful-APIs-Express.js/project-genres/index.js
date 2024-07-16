const Joi = require('joi')
const express = require('express');
const app = express();

app.use(express.json())

// Ctrl + c to restart terminal

const genres = [
    { id: 1, name:'mosh'},
    { id: 2, name:'tech'},
    { id: 3, name:'amigos'}
]

app.get("/", (request, response) => {
    response.send('Hello World');
});

 

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})