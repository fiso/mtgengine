"use strict";
module.exports = {
  ColossalWhale: require("./ColossalWhale"),
  GoblinDiplomats: require("./GoblinDiplomats"),
  HiveStirrings: require("./HiveStirrings"),
  MeganticSliver: require("./MeganticSliver"),
  RatchetBomb: require("./RatchetBomb")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPM14 = module.exports;}