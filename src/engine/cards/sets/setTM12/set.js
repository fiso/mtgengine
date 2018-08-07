"use strict";
module.exports = {
  Beast: require("./Beast"),
  Bird: require("./Bird"),
  Pentavite: require("./Pentavite"),
  Saproling: require("./Saproling"),
  Soldier: require("./Soldier"),
  Wurm: require("./Wurm"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTM12 = module.exports;}