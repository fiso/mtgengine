"use strict";
module.exports = {
  Bat: require("./Bat"),
  Dragon: require("./Dragon"),
  Elemental: require("./Elemental"),
  ElspethKnightErrantEmblem: require("./ElspethKnightErrantEmblem"),
  FaerieRogue: require("./FaerieRogue"),
  GiantWarrior: require("./GiantWarrior"),
  Goblin: require("./Goblin"),
  GoblinRogue: require("./GoblinRogue"),
  Illusion: require("./Illusion"),
  KithkinSoldier: require("./KithkinSoldier"),
  Saproling: require("./Saproling"),
  Soldier: require("./Soldier"),
  Spider: require("./Spider"),
  TreefolkShaman: require("./TreefolkShaman"),
  Worm: require("./Worm"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTMMA = module.exports;}