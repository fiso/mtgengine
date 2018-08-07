"use strict";
module.exports = {
  Elemental: require("./Elemental"),
  ElfWarrior: require("./ElfWarrior"),
  Goblin: require("./Goblin")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTEVG = module.exports;}