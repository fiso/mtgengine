"use strict";
module.exports = {
  ChandraGremlinWrangler: require("./ChandraGremlinWrangler"),
  DungeonMaster: require("./DungeonMaster"),
  NiraHellkiteDuelist: require("./NiraHellkiteDuelist")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setHTR = module.exports;}