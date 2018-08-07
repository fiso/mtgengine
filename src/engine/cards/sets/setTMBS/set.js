"use strict";
module.exports = {
  Germ: require("./Germ"),
  Golem: require("./Golem"),
  Horror: require("./Horror"),
  PoisonCounter: require("./PoisonCounter"),
  Thopter: require("./Thopter"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTMBS = module.exports;}