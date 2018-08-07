"use strict";
module.exports = {
  Elemental: require("./Elemental"),
  Elemental: require("./Elemental"),
  ElfWarrior: require("./ElfWarrior"),
  ElfWarrior: require("./ElfWarrior"),
  FaerieRogue: require("./FaerieRogue"),
  GiantWarrior: require("./GiantWarrior"),
  GoblinWarrior: require("./GoblinWarrior"),
  KithkinSoldier: require("./KithkinSoldier"),
  Rat: require("./Rat"),
  Spider: require("./Spider"),
  Spirit: require("./Spirit"),
  Wolf: require("./Wolf")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTSHM = module.exports;}