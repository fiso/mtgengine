"use strict";
module.exports = {
  FatedIntervention: require("./FatedIntervention"),
  FontofFertility: require("./FontofFertility"),
  HydraBroodmaster: require("./HydraBroodmaster"),
  PrognosticSphinx: require("./PrognosticSphinx"),
  ProphetofKruphix: require("./ProphetofKruphix"),
  TempleofMystery: require("./TempleofMystery")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setCP1 = module.exports;}