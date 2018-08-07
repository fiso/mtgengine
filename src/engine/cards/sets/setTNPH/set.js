"use strict";
module.exports = {
  Beast: require("./Beast"),
  Goblin: require("./Goblin"),
  Golem: require("./Golem"),
  Myr: require("./Myr"),
  PoisonCounter: require("./PoisonCounter")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTNPH = module.exports;}