export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experience = 0;
    this.inventory = [];
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

  addItem(name, quantity) {
    const index = this.inventory.findIndex(item => item.name === name);

    if (index !== -1) {
      this.inventory[index].quantity += quantity;
    } else {
      this.inventory.push({
        name: name,
        quantity: quantity
      });
    }
  }

  removeItem(name, quantity) {
    const index = this.inventory.findIndex(item => item.name === name);

    if (index !== -1) {
      this.inventory[index].quantity -= quantity;

      if (this.inventory[index].quantity <= 0) {
        this.inventory.splice(index, 1);
      }
    }
  }
}

const player = new Player("Arix", 1);

player.addItem("Poción", 3);
player.addItem("Espada", 1);

console.log(player.inventory);

player.addItem("Poción", 2);

console.log(player.inventory);

player.removeItem("Poción", 4);

console.log(player.inventory);