"use strict";
module.exports = {
  Bear: require("./Bear"),
  Demon: require("./Demon"),
  Goblin: require("./Goblin"),
  Insect: require("./Insect"),
  Rukh: require("./Rukh"),
  Sliver: require("./Sliver"),
  VoidmageProdigy: require("./VoidmageProdigy")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setP03 = module.exports;}