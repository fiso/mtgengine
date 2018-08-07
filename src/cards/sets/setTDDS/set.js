"use strict";
module.exports = {
  Beast: require("./Beast"),
  Drake: require("./Drake"),
  Elemental: require("./Elemental"),
  Elephant: require("./Elephant"),
  ElfWarrior: require("./ElfWarrior"),
  Goblin: require("./Goblin"),
  Wurm: require("./Wurm")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTDDS = module.exports;}