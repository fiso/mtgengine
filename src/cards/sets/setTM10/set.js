"use strict";
module.exports = {
  Avatar: require("./Avatar"),
  Beast: require("./Beast"),
  Gargoyle: require("./Gargoyle"),
  Goblin: require("./Goblin"),
  Insect: require("./Insect"),
  Soldier: require("./Soldier"),
  Wolf: require("./Wolf"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTM10 = module.exports;}