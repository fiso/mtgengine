"use strict";
module.exports = {
  Beast: require("./Beast"),
  Dragon: require("./Dragon"),
  Goblin: require("./Goblin"),
  Homunculus: require("./Homunculus"),
  Ooze: require("./Ooze"),
  Saproling: require("./Saproling"),
  Skeleton: require("./Skeleton"),
  Soldier: require("./Soldier"),
  Thopter: require("./Thopter"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTALA = module.exports;}