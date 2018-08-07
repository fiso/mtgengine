"use strict";
module.exports = {
  ElvishChampion: require("./ElvishChampion"),
  GloriousAnthem: require("./GloriousAnthem"),
  SakuraTribeElder: require("./SakuraTribeElder"),
  ShardPhoenix: require("./ShardPhoenix"),
  SoltariPriest: require("./SoltariPriest"),
  WhirlingDervish: require("./WhirlingDervish")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPJAS = module.exports;}