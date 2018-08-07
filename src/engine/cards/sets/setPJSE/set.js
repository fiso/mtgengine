"use strict";
module.exports = {
  ElvishChampion: require("./ElvishChampion"),
  GloriousAnthem: require("./GloriousAnthem"),
  RoyalAssassin: require("./RoyalAssassin"),
  SakuraTribeElder: require("./SakuraTribeElder"),
  ShardPhoenix: require("./ShardPhoenix"),
  SlithFirewalker: require("./SlithFirewalker"),
  SoltariPriest: require("./SoltariPriest"),
  WhirlingDervish: require("./WhirlingDervish")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPJSE = module.exports;}