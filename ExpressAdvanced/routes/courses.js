const express = require('express')
const router= express.Router()

const courses = [
    { id: 1, name:'mosh'},
    { id: 2, name:'tech'},
    { id: 3, name:'amigos'}
]

router.get("/", (request, response) => {
    response.send(courses);
});

router.get("/:id", (request, response) => {
    const course = courses.find(course => course.id === parseInt(request.params.id));
    if(!course) {return response.status(404).send('The course with the given ID was not found')}
    response.send(course);
});

router.post('/', (request, response) => {

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

router.put("/:id", (request, response) => {
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

router.delete("/:id", (request, response) => {
    const course = courses.find(course => course.id === parseInt(request.params.id));
    if(!course) {return response.status(404).send('The course with the given ID was not found')}

    courses.splice(courses.indexOf(course),1)

    response.send(course)
})

module.exports = router;