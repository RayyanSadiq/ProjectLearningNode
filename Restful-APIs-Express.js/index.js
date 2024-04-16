const express = require('express');
const app = express();

app.use(express.json())

// Ctrl + c to restart terminal

const courses = [
    { id: 1, name:'mosh'},
    { id: 2, name:'tech'},
    { id: 3, name:'amigos'}
]

app.get("/", (request, response) => {
    response.send('Hello World');
});

app.get("/api/courses", (request, response) => {
    response.send(courses);
});

app.get("/api/courses/:id", (request, response) => {
    const course = courses.find(course => course.id === parseInt(request.params.id));
    if(!course) {response.status(404).send('The course with the given ID was not found')}
    response.send(course)
});

app.post('/api/courses', (request, response) => {
    const course = {
        id: courses.length + 1,
        name: request.body.name
    }
    courses.push(course);
    response.send(course)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})