"use strict";
module.exports = {
  GemstoneMine: require("./GemstoneMine"),
  MishrasFactory: require("./MishrasFactory"),
  Regrowth: require("./Regrowth"),
  SolRing: require("./SolRing")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setG05 = module.exports;}