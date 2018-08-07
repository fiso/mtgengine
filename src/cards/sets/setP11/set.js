"use strict";
module.exports = {
  BravetheElements: require("./BravetheElements"),
  DayofJudgment: require("./DayofJudgment"),
  DoomBlade: require("./DoomBlade"),
  SearingBlaze: require("./SearingBlaze"),
  TreasureHunt: require("./TreasureHunt")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setP11 = module.exports;}