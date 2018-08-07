"use strict";
module.exports = {
  Bird: require("./Bird"),
  Bird: require("./Bird"),
  CatSoldier: require("./CatSoldier"),
  Centaur: require("./Centaur"),
  Elemental: require("./Elemental"),
  Gold: require("./Gold"),
  KioratheCrashingWaveEmblem: require("./KioratheCrashingWaveEmblem"),
  Kraken: require("./Kraken"),
  Soldier: require("./Soldier"),
  Wolf: require("./Wolf"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTBNG = module.exports;}