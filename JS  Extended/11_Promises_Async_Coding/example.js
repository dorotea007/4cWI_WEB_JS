const userLeft = false
const userWatchingCatMeme = false

function watchTurtorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User watching cat meme',
            message: 'WebDevSimplifield < Cat'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}

watchTurtorialCallback = ((message) => {
    console.log('Success ' + message)
}, (error) => {
    console.error(error.name + '  ' + error.message)
})

function watchTurtorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User watching cat meme',
                message: 'WebDevSimplifield < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTurtorialPromise().then((message) => {
    console.log('Success: ' + message)
}).then((message) => {
    console.log('Success:'+ message)
}).catch((error) => {
    console.error(error.name + '  ' + error.message)
})
