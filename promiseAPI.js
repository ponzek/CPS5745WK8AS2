//Part 2.5
// Promise.all() waits for every promise to succeed.
const winterMessage = Promise.resolve("Winter is Coming");
const northMessage = Promise.resolve("The North Remembers");
const valarMessage = Promise.resolve("Valar Morghulis");

Promise.all([winterMessage, northMessage, valarMessage])
  .then(messages => {
    console.log("Messages:", messages);
  })
  .catch(error => {
    console.error("Error:", error);
  });

// Promise.race() uses the first promise to finish.
const arya = new Promise(resolve => {
  setTimeout(() => resolve("Arya Stark"), 500);
});

const sansa = new Promise(resolve => {
  setTimeout(() => resolve("Sansa Stark"), 1000);
});

Promise.race([arya, sansa])
  .then(winner => {
    console.log("First to complete:", winner);
  })
  .catch(error => {
    console.error("Error:", error);
  });