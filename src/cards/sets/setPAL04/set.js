"use strict";
module.exports = {
  AshnodsCoupon: require("./AshnodsCoupon"),
  BoosterTutor: require("./BoosterTutor"),
  CircleofProtectionArt: require("./CircleofProtectionArt"),
  DarksteelIngot: require("./DarksteelIngot"),
  Forest: require("./Forest"),
  GlacialRay: require("./GlacialRay"),
  GoblinMime: require("./GoblinMime"),
  GrannysPayback: require("./GrannysPayback"),
  Island: require("./Island"),
  Mise: require("./Mise"),
  Mountain: require("./Mountain"),
  Plains: require("./Plains"),
  SerumVisions: require("./SerumVisions"),
  Swamp: require("./Swamp")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPAL04 = module.exports;}