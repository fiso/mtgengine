"use strict";
module.exports = {
  Forest: require("./Forest"),
  GenjuoftheSpires: require("./GenjuoftheSpires"),
  Island: require("./Island"),
  Mountain: require("./Mountain"),
  OkinaNightwatch: require("./OkinaNightwatch"),
  Plains: require("./Plains"),
  SkyknightLegionnaire: require("./SkyknightLegionnaire"),
  Swamp: require("./Swamp")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPAL05 = module.exports;}