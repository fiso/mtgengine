"use strict";
module.exports = {
  EldraziSpawn: require("./EldraziSpawn"),
  Elemental: require("./Elemental"),
  Hellion: require("./Hellion"),
  Ooze: require("./Ooze"),
  TuktukTheReturned: require("./TuktukTheReturned")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTROE = module.exports;}