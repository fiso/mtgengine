"use strict";
module.exports = {
  FaerieRogue: require("./FaerieRogue"),
  GiantWarrior: require("./GiantWarrior"),
  TreefolkShaman: require("./TreefolkShaman")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTMOR = module.exports;}