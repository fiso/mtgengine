"use strict";
module.exports = {
  Crusade: require("./Crusade"),
  Dragon: require("./Dragon"),
  Elephant: require("./Elephant"),
  Soldier: require("./Soldier"),
  Squirrel: require("./Squirrel"),
  Wasteland: require("./Wasteland"),
  Wurm: require("./Wurm"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPR2 = module.exports;}