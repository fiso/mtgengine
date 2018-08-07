"use strict";
module.exports = {
  Bear: require("./Bear"),
  Beast: require("./Beast"),
  Bird: require("./Bird"),
  Elephant: require("./Elephant"),
  GoblinSoldier: require("./GoblinSoldier"),
  Saproling: require("./Saproling"),
  Spirit: require("./Spirit"),
  Wasteland: require("./Wasteland")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setMPR = module.exports;}