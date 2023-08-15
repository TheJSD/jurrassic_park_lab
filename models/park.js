class Park {
  constructor (name, ticketPrice, dinosaurs = []) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = dinosaurs
  };
  addDinosaur(dinosaur) {
    this.dinosaurs.push(dinosaur)
  };
  removeDinosaur(dinosaur) {
    let dinoIndex = this.dinosaurs.indexOf(dinosaur)
    this.dinosaurs.splice(dinoIndex, 1)
  };
  mostVisitedDinosaur() {
    let mostAttractiveDinosaur = this.dinosaurs[0];
    for (let i=1; i<this.dinosaurs.length; i++) {
      if (this.dinosaurs[i].guestsAttractedPerDay > mostAttractiveDinosaur.guestsAttractedPerDay) {
        mostAttractiveDinosaur = this.dinosaurs[i]
      };
      return `The hottest Dinosaur at ${this.name} is ${mostAttractiveDinosaur.species} with ${mostAttractiveDinosaur.guestsAttractedPerDay} visits per day!`
    };
  };
  findDinosaursBySpecies(species) {
    let speciesList = [];
    for (let dinosaur of this.dinosaurs) {
      if (species == dinosaur.species) {
        speciesList.push(dinosaur)
      }
    }
    return speciesList
  }
  findTotalVisitsPerDay() {
    let totalVisitsPerDay = 0;
    for (let dinosaur of this.dinosaurs) {
      totalVisitsPerDay += dinosaur.guestsAttractedPerDay
    }
    return totalVisitsPerDay
  }
  findTotalVisitsPerYear() {
    let totalVisitsPerDay = this.findTotalVisitsPerDay();
    let totalVisitsPerYear = totalVisitsPerDay*365
    return totalVisitsPerYear
  }
  findTotalTicketSalesInYears(years) {
    let totalVisitsPerYear = this.findTotalVisitsPerYear()
    let ticketSalesInAYear = totalVisitsPerYear*this.ticketPrice
    let ticketSalesInNumberOfYears = ticketSalesInAYear*years
    return ticketSalesInNumberOfYears
  }
  removeDinosaursBySpecies(species) {
    for (let i=this.dinosaurs.length -1; i>=0; i--) {
      if (this.dinosaurs[i].species == species){
        this.dinosaurs.splice(i, 1)
      }
    }
  }
}
module.exports = Park

/*
removeDinosaursBySpecies(species) {
  let indexesToRemove = [];
  for (let i=0; i<this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species == species){
      indexesToRemove.push(i)
    }
  }
  let reversedIndexList = []
  for (let i=0; i<indexesToRemove.length; i++) {
    reversedIndexList.push(indexesToRemove[-i])
  }
  for (let index in reversedIndexList) {
    this.dinosaurs.splice(index)
  }
}
*/