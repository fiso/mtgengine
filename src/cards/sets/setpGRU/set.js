"use strict";
module.exports = {
  Forest: require("./Forest"),
  Island: require("./Island"),
  Mountain: require("./Mountain"),
  Plains: require("./Plains"),
  Swamp: require("./Swamp")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setpGRU = module.exports;}