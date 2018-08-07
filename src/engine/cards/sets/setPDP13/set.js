"use strict";
module.exports = {
  BonescytheSliver: require("./BonescytheSliver"),
  OgreBattledriver: require("./OgreBattledriver"),
  ScavengingOoze: require("./ScavengingOoze")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPDP13 = module.exports;}