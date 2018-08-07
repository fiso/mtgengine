"use strict";
module.exports = {
  Goblin: require("./Goblin"),
  Pegasus: require("./Pegasus"),
  Sheep: require("./Sheep"),
  Soldier: require("./Soldier"),
  Squirrel: require("./Squirrel"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTUGL = module.exports;}