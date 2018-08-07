"use strict";
module.exports = {
  Angel: require("./Angel"),
  Cleric: require("./Cleric"),
  DomriRadeEmblem: require("./DomriRadeEmblem"),
  FrogLizard: require("./FrogLizard"),
  Horror: require("./Horror"),
  Rat: require("./Rat"),
  Soldier: require("./Soldier"),
  Spirit: require("./Spirit")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTGTC = module.exports;}