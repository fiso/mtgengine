"use strict";
module.exports = {
  AjaniSteadfast: require("./AjaniSteadfast"),
  ChandraPyromaster: require("./ChandraPyromaster"),
  GarrukApexPredator: require("./GarrukApexPredator"),
  JacetheLivingGuildpact: require("./JacetheLivingGuildpact"),
  LilianaVess: require("./LilianaVess"),
  NissaWorldwaker: require("./NissaWorldwaker")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPS14 = module.exports;}