"use strict";
module.exports = {
  AlbinoTroll: require("./AlbinoTroll"),
  AuraofSilence: require("./AuraofSilence"),
  BlackKnight: require("./BlackKnight"),
  Dissipate: require("./Dissipate"),
  DrainLife: require("./DrainLife"),
  Fireslinger: require("./Fireslinger"),
  Forbid: require("./Forbid"),
  MoggFanatic: require("./MoggFanatic"),
  SoltariPriest: require("./SoltariPriest"),
  SpikeFeeder: require("./SpikeFeeder"),
  WallofBlossoms: require("./WallofBlossoms"),
  WhiteKnight: require("./WhiteKnight")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setF02 = module.exports;}