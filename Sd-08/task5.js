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

    if(this.experience < 0){
      this.experience = 0;
    }
  }
}

function play() {
  const matchs = [1, 2, 3, 4, 5, 6];
  const random = Math.floor(Math.random() * matchs.length);
  const result = matchs[random];

  return result;
}

const player = new Player("Arix", 1);

const opportunities = 3;

for (let i = 0; i < opportunities; i++) {
  const match = play();

  console.log(`Resultado: ${match}`);

  if (match % 2 === 0) {
    player.gainExperience(50);
    console.log("Ganó 50 XP\n");
  } else{
    player.gainExperience(-50);
    console.log("Perdió 50 XP\n");
  }
}

console.log(`Experiencia: ${player.experience}`);
console.log(player.info());