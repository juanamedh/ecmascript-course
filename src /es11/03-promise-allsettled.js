// Promises

const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve #2"));

// Use the promise's method "allSettled" w/ an array of the promises as args
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));