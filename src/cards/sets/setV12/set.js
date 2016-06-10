"use strict";
module.exports = {
  AncientTomb: require("./AncientTomb"),
  BoseijuWhoSheltersAll: require("./BoseijuWhoSheltersAll"),
  CephalidColiseum: require("./CephalidColiseum"),
  Desert: require("./Desert"),
  DryadArbor: require("./DryadArbor"),
  ForbiddenOrchard: require("./ForbiddenOrchard"),
  GlacialChasm: require("./GlacialChasm"),
  GroveoftheBurnwillows: require("./GroveoftheBurnwillows"),
  HighMarket: require("./HighMarket"),
  MazeofIth: require("./MazeofIth"),
  MurmuringBosk: require("./MurmuringBosk"),
  ShivanGorge: require("./ShivanGorge"),
  UrborgTombofYawgmoth: require("./UrborgTombofYawgmoth"),
  Vesuva: require("./Vesuva"),
  WindbriskHeights: require("./WindbriskHeights")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setV12 = module.exports;}