"use strict";
module.exports = {
  Assassin: require("./Assassin"),
  Beast: require("./Beast"),
  Construct: require("./Construct"),
  Dragon: require("./Dragon"),
  Goblin: require("./Goblin"),
  Insect: require("./Insect"),
  Lizard: require("./Lizard"),
  Soldier: require("./Soldier"),
  Soldier: require("./Soldier"),
  Spirit: require("./Spirit"),
  TheMonarch: require("./TheMonarch"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTCN2 = module.exports;}