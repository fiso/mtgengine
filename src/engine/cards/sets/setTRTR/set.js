"use strict";
module.exports = {
  Assassin: require("./Assassin"),
  Bird: require("./Bird"),
  Centaur: require("./Centaur"),
  Dragon: require("./Dragon"),
  Elemental: require("./Elemental"),
  Goblin: require("./Goblin"),
  Knight: require("./Knight"),
  Ooze: require("./Ooze"),
  Rhino: require("./Rhino"),
  Saproling: require("./Saproling"),
  Soldier: require("./Soldier"),
  Wurm: require("./Wurm")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTRTR = module.exports;}