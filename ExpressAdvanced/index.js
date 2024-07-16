const Joi = require('joi')
const middleware = require ('./middleware/middleware')
const express = require('express');
const app = express();

app.set('view engine', 'pug')
app.set('views', './views')

const courses = require('./routes/courses')
const home = require('./routes/home')

app.use(express.json())
app.use('/api/courses', courses)
app.use('/', home)
app.use(middleware)
// Ctrl + c to restart terminal




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})