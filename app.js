const Dinosaur = require("./models/dinosaur")
const Park = require("./models/park")

const dinosaur1 = new Dinosaur("tyrannosaurus", "carnivore", 1000)
const paul = new Dinosaur("tyrannosaurus", "carnivore", 950)
const dinosaur2 = new Dinosaur("stegosaurus", "herbivore", 50)
const dinosaur3 = new Dinosaur("pterodactyl", "carnivore", 500)
const dinosaur4 = new Dinosaur("Gigantoraptor", "omnivore", 75)

const park = new Park("Awesome Dinosaur Park", 50)
park.addDinosaur(dinosaur1)
park.addDinosaur(paul)
park.addDinosaur(dinosaur2)
park.addDinosaur(dinosaur3)
park.addDinosaur(dinosaur4)

// park.removeDinosaur(dinosaur3)

// console.log(park.mostVisitedDinosaur());

// 
// console.log(park.findDinosaursBySpecies("tyrannosaurus"))

// console.log(park.findTotalVisitsPerDay())
// console.log(park.findTotalVisitsPerYear())
// console.log(park.findTotalTicketSalesInYears(1));

park.removeDinosaursBySpecies("tyrannosaurus")
// console.log(park.dinosaurs.indexOf("tyrannosaurus"))

console.log(park);