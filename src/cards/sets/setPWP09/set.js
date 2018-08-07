"use strict";
module.exports = {
  HellsparkElemental: require("./HellsparkElemental"),
  KorDuelist: require("./KorDuelist"),
  MarisisTwinclaws: require("./MarisisTwinclaws"),
  MindControl: require("./MindControl"),
  PathtoExile: require("./PathtoExile"),
  RisefromtheGrave: require("./RisefromtheGrave"),
  SlaveofBolas: require("./SlaveofBolas"),
  VampireNighthawk: require("./VampireNighthawk")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPWP09 = module.exports;}