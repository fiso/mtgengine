"use strict";
module.exports = {
  AncestralRecall: require("./AncestralRecall"),
  BlackLotus: require("./BlackLotus"),
  MoxEmerald: require("./MoxEmerald"),
  MoxJet: require("./MoxJet"),
  MoxPearl: require("./MoxPearl"),
  MoxRuby: require("./MoxRuby"),
  MoxSapphire: require("./MoxSapphire"),
  Timetwister: require("./Timetwister"),
  TimeWalk: require("./TimeWalk")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setOVNT = module.exports;}