"use strict";
module.exports = {
  GiantGrowth: require("./GiantGrowth"),
  LlanowarElves: require("./LlanowarElves"),
  LongbowArcher: require("./LongbowArcher"),
  MindWarp: require("./MindWarp"),
  ProdigalSorcerer: require("./ProdigalSorcerer"),
  RiverBoa: require("./RiverBoa"),
  Shock: require("./Shock"),
  StaunchDefenders: require("./StaunchDefenders"),
  StoneRain: require("./StoneRain"),
  Terror: require("./Terror"),
  VolcanicGeyser: require("./VolcanicGeyser")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setFNM = module.exports;}