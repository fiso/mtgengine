"use strict";
module.exports = {
  ArmoredPegasus: require("./ArmoredPegasus"),
  BullHippo: require("./BullHippo"),
  CloudPirates: require("./CloudPirates"),
  FeralShadow: require("./FeralShadow"),
  SnappingDrake: require("./SnappingDrake"),
  StormCrow: require("./StormCrow")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setpPOD = module.exports;}