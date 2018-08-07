"use strict";
module.exports = {
  Arena: require("./Arena"),
  GiantBadger: require("./GiantBadger"),
  ManaCrypt: require("./ManaCrypt"),
  SewersofEstark: require("./SewersofEstark"),
  WindseekerCentaur: require("./WindseekerCentaur")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPHPR = module.exports;}