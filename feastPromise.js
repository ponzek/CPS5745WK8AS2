//Part 2.3
//Exmaple 1 - Is the feast ready?
const feastPromise = new Promise((resolve, reject) => {
  const isFeastReady = false; // Change this to true or false to test the promise

  if (isFeastReady) {
    resolve("The feast is ready! Enjoy the meal.");
  } else {
    reject("The feast is not ready yet. Please wait.");
  }
});

feastPromise
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error);
  });