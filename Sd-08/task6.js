export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experience = 0;
  }

  info() {
    return `${this.name} has reached Level ${this.level}!`;
  }

  levelUp() {
    this.level += 1;
  }

  gainExperience(points) {
    this.experience += points;

    if (this.experience >= 100) {
      this.levelUp();
      this.experience -= 100;
    }

    if (this.experience < 0) {
      this.experience = 0;
    }
  }
}

class Party {
  constructor() {
    this.members = [];
  }

  addPlayer(player) {
    this.members.push(player);
  }

  removePlayer(name) {
    const index = this.members.findIndex(player => player.name === name);

    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }
}

const party = new Party();

const playerOne = new Player("Arix", 1);
const playerTwo = new Player("Tara", 3);
const playerThree = new Player("Grog", 4);

party.addPlayer(playerOne);
party.addPlayer(playerTwo);
party.addPlayer(playerThree);

console.log(party.members);

party.removePlayer("Tara");

console.log(party.members);