const Joi = require('joi')
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
    if(!course) {return response.status(404).send('The course with the given ID was not found')}
    response.send(course);
});

app.post('/api/courses', (request, response) => {

    const schema = Joi.object({
        name: Joi
            .string()
            .min(3)
            .required(),
         
    });
    const result = schema.validate(request.body);

    const course = {
        id: courses.length + 1,
        name: request.body.name
    }  
    
    if (result.error){
        return response.status(400).send(result.error.details[0].message ) // result.error.message also works here for some reason
    } 
    else {
        courses.push(course);
        response.send(course)
    }
    console.log(result.error)

    
})

app.put("/api/courses/:id", (request, response) => {
    const course = courses.find(course => course.id === parseInt(request.params.id));
    if(!course) { return response.status(404).send('The course with the given ID was not found')}

    const schema = Joi.object({
        name: Joi
            .string()
            .min(3)
            .required(),
         
    });
    const result = schema.validate(request.body);
    if (result.error){
        return response.status(400).send(result.error.details[0].message ) // result.error.message also works here for some reason
    } 

    course.name = request.body.name
    response.send(course)


})  

app.delete("/api/courses/:id", (request, response) => {
    const course = courses.find(course => course.id === parseInt(request.params.id));
    if(!course) {return response.status(404).send('The course with the given ID was not found')}

    courses.splice(courses.indexOf(course),1)

    response.send(course)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})