"use strict";
module.exports = {
  Dragon: require("./Dragon"),
  Eldrazi: require("./Eldrazi"),
  EldraziScion: require("./EldraziScion"),
  Elemental: require("./Elemental"),
  Elemental: require("./Elemental"),
  GideonAllyofZendikarEmblem: require("./GideonAllyofZendikarEmblem"),
  KioraMasteroftheDepthsEmblem: require("./KioraMasteroftheDepthsEmblem"),
  KnightAlly: require("./KnightAlly"),
  KorAlly: require("./KorAlly"),
  ObNixilisReignitedEmblem: require("./ObNixilisReignitedEmblem"),
  Octopus: require("./Octopus"),
  Plant: require("./Plant")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTBFZ = module.exports;}