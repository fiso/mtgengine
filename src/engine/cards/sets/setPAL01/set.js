"use strict";
module.exports = {
  CreepingMold: require("./CreepingMold"),
  DiabolicEdict: require("./DiabolicEdict"),
  Dismiss: require("./Dismiss"),
  EmpyrialArmor: require("./EmpyrialArmor"),
  Fling: require("./Fling"),
  Forest: require("./Forest"),
  GaeasBlessing: require("./GaeasBlessing"),
  Island: require("./Island"),
  Mountain: require("./Mountain"),
  Plains: require("./Plains"),
  Swamp: require("./Swamp")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPAL01 = module.exports;}