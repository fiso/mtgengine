"use strict";
module.exports = {
  Angel: require("./Angel"),
  EldraziScion: require("./EldraziScion"),
  Elemental: require("./Elemental"),
  Elemental: require("./Elemental"),
  Plant: require("./Plant"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTOGW = module.exports;}