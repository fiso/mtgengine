"use strict";
module.exports = {
  BoggartRamGang: require("./BoggartRamGang"),
  CennsTactician: require("./CennsTactician"),
  DuergarHedgeMage: require("./DuergarHedgeMage"),
  Gravedigger: require("./Gravedigger"),
  LavaAxe: require("./LavaAxe"),
  OonasBlackguard: require("./OonasBlackguard"),
  SelkieHedgeMage: require("./SelkieHedgeMage"),
  WiltLeafCavaliers: require("./WiltLeafCavaliers")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPG08 = module.exports;}