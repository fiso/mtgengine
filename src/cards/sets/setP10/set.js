"use strict";
module.exports = {
  BituminousBlast: require("./BituminousBlast"),
  BurstLightning: require("./BurstLightning"),
  Cancel: require("./Cancel"),
  CelestialPurge: require("./CelestialPurge"),
  Harrow: require("./Harrow"),
  Infest: require("./Infest"),
  LightningBolt: require("./LightningBolt"),
  SigninBlood: require("./SigninBlood"),
  VolcanicFallout: require("./VolcanicFallout")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setP10 = module.exports;}