"use strict";
module.exports = {
  Blightning: require("./Blightning"),
  CrypticCommand: require("./CrypticCommand"),
  FlameJavelin: require("./FlameJavelin"),
  NamelessInversion: require("./NamelessInversion"),
  Negate: require("./Negate"),
  RampantGrowth: require("./RampantGrowth"),
  RemoveSoul: require("./RemoveSoul"),
  Terminate: require("./Terminate"),
  Unmake: require("./Unmake")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setP09 = module.exports;}