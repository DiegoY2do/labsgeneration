export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }

    info(){
        return `${this.name} has reached Level ${this.level}!`;
    };

    levelUp(){
      this.level += 1;
    }
  }

const player = new Player("Arix", 23);

console.log(player.info());

player.levelUp();
console.log(player.info());