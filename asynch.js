//Part 2
//Part 2.1
// Synchronous example
console.log("Jon Snow arrives at the Wall.");
console.log("He takes the black.");
console.log("He joins the Night's Watch.");

// Asynchronous example
console.log("Daenerys starts hatching her dragon eggs.");

setTimeout(() => {
  console.log("Dragon egg hatched!");
}, 2000);

//setTimeout(() => {
//  console.log("Dragon egg hatched!");
//}, 3000);

//setTimeout(() => {
//  console.log("Dragon egg hatched!");
//}, 4000);

//setTimeout(() => {
//  console.log("Dragon egg hatched!");
//}, 0000);

console.log("Daenerys plans her next battle.");

//Part 2.2
console.log("Jon Snow starts his watch.");

setTimeout(() => {
  console.log("Jon Snow spots a White Walker.");
}, 3000);

console.log("Jon Snow patrols the Wall.");

//Practice
const guests = ["Jon Snow", "Sansa Stark", "Arya Stark"];

// Welcome each guest right away.
guests.forEach(guest => {
  console.log(`Welcome to Winterfell, ${guest}!`);
});

// Serve each guest a drink after one second.
guests.forEach(guest => {
  setTimeout(() => {
    console.log(`A drink is served to ${guest}.`);
  }, 1000);
});

console.log("The entertainment program is starting!");

setTimeout(() => {
  console.log("The feast has begun!");
}, 2000);

setTimeout(() => {
  console.log("The juggler performs.");
}, 3000);

setTimeout(() => {
  console.log("The singer performs.");
}, 4000);

setTimeout(() => {
  console.log("The dancers perform.");
}, 5000);

console.log("Thank you all for attending the feast!");

//Part 2.3
//Example 1 - Is the feast ready?
//Look for feastPromise.js