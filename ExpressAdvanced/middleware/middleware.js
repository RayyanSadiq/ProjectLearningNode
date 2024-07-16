
function auth(request, response, next){
    console.log('auth')
    next()
}

module.exports = auth