"use strict";
module.exports = {
  ArcLightning: require("./ArcLightning"),
  DauthiSlayer: require("./DauthiSlayer"),
  Island: require("./Island"),
  ManaLeak: require("./ManaLeak"),
  ManoWar: require("./ManoWar")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPAL02 = module.exports;}