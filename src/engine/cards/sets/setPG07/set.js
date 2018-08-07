"use strict";
module.exports = {
  Boomerang: require("./Boomerang"),
  Calciderm: require("./Calciderm"),
  DauntlessDourbark: require("./DauntlessDourbark"),
  LlanowarElves: require("./LlanowarElves"),
  MindStone: require("./MindStone"),
  MoggFanatic: require("./MoggFanatic"),
  RecklessWurm: require("./RecklessWurm"),
  YixlidJailer: require("./YixlidJailer"),
  ZoeticCavern: require("./ZoeticCavern")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPG07 = module.exports;}