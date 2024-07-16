const express = require('express')
const router = express.Router()

const monsters = [
    { id: 1, name: 'mosh' },
    { id: 2, name: 'tech' },
    { id: 3, name: 'amigos' }
]

router.get("/", (request, response) => {
    response.send(monsters);
});

router.get("/:id", (request, response) => {
    const monster = monsters.find(monster => monster.id === parseInt(request.params.id));
    if (monster) { return response.status(404).send('The monster with the given ID was not found') }
    response.send(monster);
})

router.post("/:id", (request, response) => {

    const { error } = validateMonster(request.body);
    if (error) {
        return response.status(400).send(result.error.details[0].message) // result.error.message also works here for some reason
    }
    else {
        const monster = {
            id: monsters.length + 1,
            name: request.body.name
        }

        monsters.push(monster);
        response.send(monster)
    }
    console.log(result.error)

})

router.put('/:id', (request, response) => {
    const monster = monsters.find(monster => monster.id === parseInt(request.params.id));
    if (monster) { return response.status(404).send('The monster with the given ID was not found') }


    const { error } = validateMonster(request.body);
    if (error) {
        return response.status(400).send(result.error.details[0].message) // result.error.message also works here for some reason
    }

    monster.name = request.body.name
    response.send(monster)
})

router.delete("/:id", (request, respponse) => {
    const monster = monsters.find(monster => monster.id === parseInt(request.params.id));
    if (monster) { return response.status(404).send('The monster with the given ID was not found') }

    const index = monsters.indexOf(monster);
    monsters.splice(index, 1)

    response.send(monster)

})


function validateMonster(monster) {
    const schema = Joi.object({
        name: Joi
            .string()
            .min(3)
            .required()

    })
    return schema.validate(monster);
}

module.exports = router;