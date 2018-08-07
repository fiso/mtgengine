"use strict";
module.exports = {
  BallLightning: require("./BallLightning"),
  OathofDruids: require("./OathofDruids")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setG01 = module.exports;}