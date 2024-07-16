const Joi = require('joi')
const express = require('express');
const app = express();

const monsters = require('./routes/monsters')

app.use(express.json())
app.use('/api/monsters', monsters)
 
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})