let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {

let personName;

for (let person of contacts) {
    personName = person.firstName

    if (name === personName) {
      for (let personProperty in person) {
        if (personProperty === property) {
          return person[property]
        }
      }
       return "No such property"
    }
  }
    return "No such contact"
}

console.log(lookUpProfile("Akira", "address"))