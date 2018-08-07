"use strict";
module.exports = {
  ElfWarrior: require("./ElfWarrior"),
  Myr: require("./Myr"),
  Thopter: require("./Thopter")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTDDU = module.exports;}