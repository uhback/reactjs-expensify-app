// resolve: well got the date, reject: sth wrong
// firebase already sets up this promise, just use promise.then().catch()
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Jayden',
        //     age: 25
        // });      
        reject(() => {
            message: 'somthing went wrong'
        })
    }, 5000)
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');