"use strict";
module.exports = {
  Carnivore: require("./Carnivore"),
  DackFaydenEmblem: require("./DackFaydenEmblem"),
  Dragon: require("./Dragon"),
  Elemental: require("./Elemental"),
  Elemental: require("./Elemental"),
  Elephant: require("./Elephant"),
  ElfWarrior: require("./ElfWarrior"),
  Goblin: require("./Goblin"),
  GoblinSoldier: require("./GoblinSoldier"),
  Serf: require("./Serf"),
  Soldier: require("./Soldier"),
  Spirit: require("./Spirit"),
  Spirit: require("./Spirit"),
  Wall: require("./Wall"),
  Wurm: require("./Wurm"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTEMA = module.exports;}