"use strict";
module.exports = {
  BlackSunsZenith: require("./BlackSunsZenith"),
  GlissatheTraitor: require("./GlissatheTraitor"),
  HeroofBladehold: require("./HeroofBladehold"),
  MirranCrusader: require("./MirranCrusader"),
  ThopterAssembly: require("./ThopterAssembly"),
  TreasureMage: require("./TreasureMage")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPMBS = module.exports;}