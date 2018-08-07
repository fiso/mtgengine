"use strict";
module.exports = {
  CelestineReef: require("./CelestineReef"),
  HorizonBoughs: require("./HorizonBoughs"),
  MirroredDepths: require("./MirroredDepths"),
  Tazeem: require("./Tazeem"),
  TemberCity: require("./TemberCity")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPHOP = module.exports;}