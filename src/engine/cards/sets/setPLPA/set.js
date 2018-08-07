"use strict";
module.exports = {
  EarwigSquad: require("./EarwigSquad"),
  FigureofDestiny: require("./FigureofDestiny"),
  KnightofNewAlara: require("./KnightofNewAlara"),
  ObeliskofAlara: require("./ObeliskofAlara"),
  VexingShusher: require("./VexingShusher")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPLPA = module.exports;}