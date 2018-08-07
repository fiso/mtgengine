"use strict";
module.exports = {
  Dragon: require("./Dragon"),
  Goblin: require("./Goblin"),
  Saproling: require("./Saproling"),
  Soldier: require("./Soldier"),
  Wasp: require("./Wasp"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setT10E = module.exports;}