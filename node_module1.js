const fs = require("fs");

console.log("Starting the spell...");

fs.readFile("magic.txt", "utf8", (error, spell) => {
  if (error) {
    console.log("Failed to read the spell");
    return;
  }

  console.log("Spell content: " + spell);
});

console.log("Ready for the next spell!");