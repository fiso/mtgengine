"use strict";
module.exports = {
  Angel: require("./Angel"),
  Beast: require("./Beast"),
  Bird: require("./Bird"),
  Elemental: require("./Elemental"),
  Illusion: require("./Illusion"),
  KorSoldier: require("./KorSoldier"),
  Merfolk: require("./Merfolk"),
  Snake: require("./Snake"),
  Vampire: require("./Vampire"),
  Wolf: require("./Wolf"),
  ZombieGiant: require("./ZombieGiant")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTZEN = module.exports;}