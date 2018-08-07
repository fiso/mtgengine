"use strict";
module.exports = {
  DarkAscensionChecklist: require("./DarkAscensionChecklist"),
  Human: require("./Human"),
  SorinLordofInnistradEmblem: require("./SorinLordofInnistradEmblem"),
  Vampire: require("./Vampire")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTDKA = module.exports;}