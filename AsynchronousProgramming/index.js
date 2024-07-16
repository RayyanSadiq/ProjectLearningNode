console.log('before')
getUser(1, (user) => {
    console.log('User', user)

    getRepositories(user.github, (repos) => {
        console.log("repos", repos)
    })
})


console.log('after')



function getUser(id, callback) {
    setTimeout(() => {
        console.log('retreving from user database')
        callback({ id: id, github: 'mosh' })
    }, 2000)
}

function getRepositories(username, callback) {
    setTimeout(() => {
        callback(['repo1', 'repo2', 'repo3'])
    })

}