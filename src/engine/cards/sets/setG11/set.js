"use strict";
module.exports = {
  Bitterblossom: require("./Bitterblossom"),
  DarkConfidant: require("./DarkConfidant"),
  DoublingSeason: require("./DoublingSeason"),
  Entomb: require("./Entomb"),
  GoblinWelder: require("./GoblinWelder"),
  ManaCrypt: require("./ManaCrypt"),
  SwordofFireandIce: require("./SwordofFireandIce"),
  VendilionClique: require("./VendilionClique"),
  Wolf: require("./Wolf")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setG11 = module.exports;}