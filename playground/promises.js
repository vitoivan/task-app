const add = (a, b) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(a + b)
        }, 2000)
    })

}

add(2,3).then( r => {
    console.log(r)
    return add(r,5)
}).then( r2 => {
    console.log(r2)
}).catch( e=> {
    console.log(e)
})