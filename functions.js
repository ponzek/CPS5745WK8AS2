//Part 1.2
// Example from the handout
function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet("Frodo");
console.log(message);
//Part 1.2
// Practice 1: Count the trolls in Mordor
function countTrolls(numberOfTrolls) {
  return `There are ${numberOfTrolls} trolls in Mordor.`;
}

console.log(countTrolls(5));

// Practice 2: Reverse a character's name
function reverseName(name) {
  return name.split("").reverse().join("");
}

console.log(reverseName("Frodo"));
//Part 1.3
// Example from the handout
const greet2 = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet2("Sam"));
//Part 1.3
// Practice 1: Can the elves defeat the orcs?
const defeatOrcs = function (numberOfOrcs, numberOfElves) {
  if (numberOfElves > numberOfOrcs) {
    return "The elves can defeat the orcs.";
  }

  return "The elves cannot defeat the orcs.";
};

console.log(defeatOrcs(300, 500));
console.log(defeatOrcs(500, 300));

// Practice 2: Is this character a ring bearer?
const isRingBearer = function (name) {
  return name === "Frodo" || name === "Sam";
};

console.log(isRingBearer("Frodo"));
console.log(isRingBearer("Sam"));
console.log(isRingBearer("Gandalf"));

//Part 1.4
// One parameter
const bye = name => `Bye-bye, ${name}!`;
console.log(bye("Frodo"));

// Two parameters
const add = (a, b) => a + b;
console.log(add(1, 2));

// No parameters
const getRingBearer = () => "Frodo Baggins";
console.log(getRingBearer());

// Multiple statements
const battle = (warrior, weapon) => {
  console.log(`${warrior} wields a ${weapon}.`);
  return `${warrior} fights bravely!`;
};

console.log(battle("Aragorn", "sword"));

//Part 1.5
// Constructor example from the handout
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;

  this.describe = function () {
    console.log(`${this.name} wields a ${this.weapon}.`);
  };
}

const legolas = new Elf("Legolas", "bow and arrow");
const tauriel = new Elf("Tauriel", "dagger");

legolas.describe();
tauriel.describe();

//Part 1.5
// 1. Convert travelTo to an arrow function
const travelTo = location => `Traveling to ${location}`;
console.log(travelTo("Mordor"));

// 2. Double each number
const numbers = [1, 2, 3, 4];
const doubleNumbers = values => values.map(number => number * 2);
console.log(doubleNumbers(numbers));

// 3. Filter out the even numbers, keeping the odd ones
const numbers2 = [1, 2, 3, 4, 5, 6];
const removeEvenNumbers = values => values.filter(number => number % 2 !== 0);
console.log(removeEvenNumbers(numbers2));

// 4. Print a message for each Fellowship member
const members = ["Frodo", "Sam", "Merry", "Pippin"];

const printFellowship = names => {
  names.forEach(name => {
    console.log(`${name} is part of the Fellowship.`);
  });
};

printFellowship(members);

// Example from the handout
function greetWithDefault(name = "Stranger") {
  return `Hello, ${name}!`;
}

console.log(greetWithDefault());
console.log(greetWithDefault("Frodo"));

// Practice: Describe a battle
function describeBattle(location, enemies = "orcs") {
  return `The battle at ${location} is against ${enemies}.`;
}

console.log(describeBattle("Minas Tirith"));
console.log(describeBattle("Helm's Deep", "Uruk-hai"));

// Example 1: Destructure an array
const [a, b] = [1, 2];
console.log(a);
console.log(b);

// Example 2: Destructure a nested object
const character = {
  thename: "Gandalf",
  thetitle: "the Grey",
  attributes: {
    race: "Maia",
    age: "Ancient",
  },
  equipment: {
    weapon: "Staff",
    secondaryWeapon: "Sword",
  },
};

const {
  thename,
  thetitle,
  attributes: { race, age },
  equipment: { weapon, secondaryWeapon },
} = character;

console.log(
  `${thename}, ${thetitle}, is a ${age} ${race} wielding a ${weapon} and a ${secondaryWeapon}.`
);

// Practice: Create and destructure a battle object
{
  const battle = {
    location: "Minas Tirith",
    participants: 10000,
  };

  const { location, participants } = battle;
  console.log(`The battle at ${location} had ${participants} participants.`);
}