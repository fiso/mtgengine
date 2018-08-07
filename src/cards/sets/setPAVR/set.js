"use strict";
module.exports = {
  KillingWave: require("./KillingWave"),
  LatchSeeker: require("./LatchSeeker"),
  MoonsilverSpear: require("./MoonsilverSpear"),
  RestorationAngel: require("./RestorationAngel"),
  SilverbladePaladin: require("./SilverbladePaladin")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPAVR = module.exports;}