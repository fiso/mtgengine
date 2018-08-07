"use strict";
module.exports = {
  Damnation: require("./Damnation"),
  DualcasterMage: require("./DualcasterMage"),
  FeldonoftheThirdPath: require("./FeldonoftheThirdPath"),
  RavagesofWar: require("./RavagesofWar"),
  RishadanPort: require("./RishadanPort"),
  ShardlessAgent: require("./ShardlessAgent"),
  TemporalManipulation: require("./TemporalManipulation"),
  Wasteland: require("./Wasteland")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setJ15 = module.exports;}