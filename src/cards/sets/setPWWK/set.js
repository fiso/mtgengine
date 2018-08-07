"use strict";
module.exports = {
  CelestialColonnade: require("./CelestialColonnade"),
  CometStorm: require("./CometStorm"),
  HadaFreeblade: require("./HadaFreeblade"),
  JoragaWarcaller: require("./JoragaWarcaller"),
  KalastriaHighborn: require("./KalastriaHighborn")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPWWK = module.exports;}