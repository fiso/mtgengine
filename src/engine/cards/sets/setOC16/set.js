"use strict";
module.exports = {
  AtraxaPraetorsVoice: require("./AtraxaPraetorsVoice"),
  BreyaEtheriumShaper: require("./BreyaEtheriumShaper"),
  KynaiosandTiroofMeletis: require("./KynaiosandTiroofMeletis"),
  SaskiatheUnyielding: require("./SaskiatheUnyielding"),
  YidrisMaelstromWielder: require("./YidrisMaelstromWielder")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setOC16 = module.exports;}