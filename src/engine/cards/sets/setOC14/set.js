"use strict";
module.exports = {
  DarettiScrapSavant: require("./DarettiScrapSavant"),
  FreyaliseLlanowarsFury: require("./FreyaliseLlanowarsFury"),
  NahiritheLithomancer: require("./NahiritheLithomancer"),
  ObNixilisoftheBlackOath: require("./ObNixilisoftheBlackOath"),
  TeferiTemporalArchmage: require("./TeferiTemporalArchmage")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setOC14 = module.exports;}