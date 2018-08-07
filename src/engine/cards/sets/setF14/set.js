"use strict";
module.exports = {
  BanisherPriest: require("./BanisherPriest"),
  BanishingLight: require("./BanishingLight"),
  BileBlight: require("./BileBlight"),
  BrainMaggot: require("./BrainMaggot"),
  Dissolve: require("./Dissolve"),
  ElvishMystic: require("./ElvishMystic"),
  EncroachingWastes: require("./EncroachingWastes"),
  FanaticofXenagos: require("./FanaticofXenagos"),
  MagmaSpray: require("./MagmaSpray"),
  StoketheFlames: require("./StoketheFlames"),
  TormentedHero: require("./TormentedHero"),
  WarleadersHelix: require("./WarleadersHelix")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setF14 = module.exports;}