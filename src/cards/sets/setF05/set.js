"use strict";
module.exports = {
  Blastoderm: require("./Blastoderm"),
  CabalTherapy: require("./CabalTherapy"),
  CircleofProtectionRed: require("./CircleofProtectionRed"),
  Counterspell: require("./Counterspell"),
  Duress: require("./Duress"),
  FactorFiction: require("./FactorFiction"),
  FlametongueKavu: require("./FlametongueKavu"),
  IcyManipulator: require("./IcyManipulator"),
  Juggernaut: require("./Juggernaut"),
  KirdApe: require("./KirdApe"),
  Rancor: require("./Rancor"),
  SealofCleansing: require("./SealofCleansing")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setF05 = module.exports;}