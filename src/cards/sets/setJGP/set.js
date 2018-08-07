"use strict";
module.exports = {
  GaeasCradle: require("./GaeasCradle"),
  LightningBolt: require("./LightningBolt"),
  StrokeofGenius: require("./StrokeofGenius")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setJGP = module.exports;}