"use strict";
module.exports = {
  DromokatheEternal: require("./DromokatheEternal"),
  HonoredHierarch: require("./HonoredHierarch"),
  SandsteppeCitadel: require("./SandsteppeCitadel"),
  SeekeroftheWay: require("./SeekeroftheWay"),
  SiegeRhino: require("./SiegeRhino"),
  ValorousStance: require("./ValorousStance")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setCP3 = module.exports;}