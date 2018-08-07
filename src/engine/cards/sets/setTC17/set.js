"use strict";
module.exports = {
  Bat: require("./Bat"),
  Cat: require("./Cat"),
  CatDragon: require("./CatDragon"),
  CatWarrior: require("./CatWarrior"),
  Dragon: require("./Dragon"),
  Dragon: require("./Dragon"),
  EldraziSpawn: require("./EldraziSpawn"),
  Gold: require("./Gold"),
  Rat: require("./Rat"),
  Vampire: require("./Vampire"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTC17 = module.exports;}