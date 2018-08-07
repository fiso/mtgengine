"use strict";
module.exports = {
  Beast: require("./Beast"),
  Bird: require("./Bird"),
  Elemental: require("./Elemental"),
  Goat: require("./Goat"),
  GoblinSoldier: require("./GoblinSoldier"),
  Spirit: require("./Spirit"),
  Worm: require("./Worm")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTEVE = module.exports;}