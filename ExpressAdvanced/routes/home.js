const express = require('express')
const router= express.Router()

router.get("/", (request, response) => {
    response.render('index', { title: 'My Exppress App', message: "Express"});
});

module.exports = router