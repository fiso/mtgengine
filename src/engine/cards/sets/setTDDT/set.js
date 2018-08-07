"use strict";
module.exports = {
  Elemental: require("./Elemental"),
  Goblin: require("./Goblin"),
  Wall: require("./Wall")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTDDT = module.exports;}