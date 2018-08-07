"use strict";
module.exports = {
  ConsumingAberration: require("./ConsumingAberration"),
  FathomMage: require("./FathomMage"),
  FiremaneAvenger: require("./FiremaneAvenger"),
  FoundryChampion: require("./FoundryChampion"),
  NightveilSpecter: require("./NightveilSpecter"),
  Rubblehulk: require("./Rubblehulk"),
  SkarrgGoliath: require("./SkarrgGoliath"),
  TreasuryThrull: require("./TreasuryThrull"),
  ZameckGuildmage: require("./ZameckGuildmage")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPGTC = module.exports;}