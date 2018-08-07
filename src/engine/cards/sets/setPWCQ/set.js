"use strict";
module.exports = {
  AbruptDecay: require("./AbruptDecay"),
  GeistofSaintTraft: require("./GeistofSaintTraft"),
  InkmothNexus: require("./InkmothNexus"),
  ThaliaGuardianofThraben: require("./ThaliaGuardianofThraben"),
  Vengevine: require("./Vengevine")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPWCQ = module.exports;}