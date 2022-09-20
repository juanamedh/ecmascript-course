// Promises
const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve #2"));

// Use the promise's method "any" w/ an array of the promises as args
// and will then return the first promise to be resolved
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));