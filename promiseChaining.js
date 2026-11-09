//Part 2.4
const getDragons = new Promise(resolve => {
  setTimeout(() => {
    resolve(["Drogon", "Rhaegal", "Viserion"]);
  }, 2000);
});

const prepareArmy = new Promise(resolve => {
  setTimeout(() => {
    resolve(["Unsullied", "Dothraki", "Northmen"]);
  }, 3000);
});

const forgeWeapons = new Promise(resolve => {
  setTimeout(() => {
    resolve(["Valyrian Steel Swords", "Dragonglass Arrows"]);
  }, 4000);
});

console.log("Preparing for the Battle of Winterfell...");

Promise.all([getDragons, prepareArmy, forgeWeapons])
  .then(([dragons, army, weapons]) => {
    console.log("Daenerys has dragons:", dragons);
    console.log("Jon Snow has gathered the army:", army);
    console.log("Weapons are ready:", weapons);
    return "Battle of Winterfell";
  })
  .then(battle => {
    console.log("Next event:", battle);
  })
  .catch(error => {
    console.error("Error:", error);
  });

  //Practice: Prepare for a magical feast
  
  const gatherIngredients = new Promise(resolve => {
  setTimeout(() => {
    resolve(["Mandrake root", "Moonstone", "Lavender"]);
  }, 2000);
});

const prepareHall = new Promise(resolve => {
  setTimeout(() => {
    resolve("The enchanted hall is ready.");
  }, 3000);
});

const brewPotions = new Promise(resolve => {
  setTimeout(() => {
    resolve(["Felix Felicis", "Polyjuice Potion"]);
  }, 4000);
});

const sendInvitations = new Promise(resolve => {
  setTimeout(() => {
    resolve(["Hermione", "Harry", "Ron"]);
  }, 2000);
});

Promise.all([gatherIngredients, prepareHall, brewPotions, sendInvitations])
  .then(([ingredients, hallMessage, potions, guests]) => {
    console.log("\nMagical feast practice");
    console.log("Ingredients:", ingredients);
    console.log(hallMessage);
    console.log("Potions:", potions);
    console.log("Invited wizards:", guests);
    return "The magical feast is ready!";
  })
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error("Feast preparation failed:", error);
  });