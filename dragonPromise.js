//Part 2.3
//Example 2 - Get Daenerys's dragons
const getDragons = new Promise((resolve, reject) => {
  const areDragonsAvailable = false; // Change this to true or false to test the promise

  setTimeout(() => {
    if (areDragonsAvailable) {
      resolve(["Drogon", "Rhaegal", "Viserion"]);
    } else {
      reject("The dragons could not be found.");
    }
  }, 2000);
});

getDragons
  .then(dragons => {
    console.log("Daenerys has dragons:", dragons);
  })
  .catch(error => {
    console.error("Failed to get dragons:", error);
  });