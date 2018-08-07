"use strict";
module.exports = {
  Arrest: require("./Arrest"),
  BreathofMalfegor: require("./BreathofMalfegor"),
  ConsumeSpirit: require("./ConsumeSpirit"),
  Electrolyze: require("./Electrolyze"),
  FaithlessLooting: require("./FaithlessLooting"),
  FeastofBlood: require("./FeastofBlood"),
  Standstill: require("./Standstill"),
  TreasureHunt: require("./TreasureHunt"),
  Turnabout: require("./Turnabout")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPIDW = module.exports;}