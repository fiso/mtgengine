"use strict";
module.exports = {
  Castigate: require("./Castigate"),
  CoilingOracle: require("./CoilingOracle"),
  Forest: require("./Forest"),
  Island: require("./Island"),
  Mountain: require("./Mountain"),
  Plains: require("./Plains"),
  SurgingFlame: require("./SurgingFlame"),
  Swamp: require("./Swamp"),
  WeeDragonauts: require("./WeeDragonauts")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPAL06 = module.exports;}