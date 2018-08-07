"use strict";
module.exports = {
  Armageddon: require("./Armageddon"),
  Balance: require("./Balance"),
  DerangedHermit: require("./DerangedHermit"),
  HermitDruid: require("./HermitDruid"),
  PhyrexianNegator: require("./PhyrexianNegator"),
  TimeWarp: require("./TimeWarp")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setG04 = module.exports;}