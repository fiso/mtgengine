"use strict";
module.exports = {
  Avatar: require("./Avatar"),
  Beast: require("./Beast"),
  Elemental: require("./Elemental"),
  Elemental: require("./Elemental"),
  ElementalShaman: require("./ElementalShaman"),
  ElfWarrior: require("./ElfWarrior"),
  GoblinRogue: require("./GoblinRogue"),
  KithkinSoldier: require("./KithkinSoldier"),
  MerfolkWizard: require("./MerfolkWizard"),
  Shapeshifter: require("./Shapeshifter"),
  Wolf: require("./Wolf")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTLRW = module.exports;}