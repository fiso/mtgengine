"use strict";
module.exports = {
  Badlands: require("./Badlands"),
  Brainstorm: require("./Brainstorm"),
  ForceofWill: require("./ForceofWill"),
  GaeasCradle: require("./GaeasCradle"),
  Savannah: require("./Savannah"),
  Scrubland: require("./Scrubland"),
  Taiga: require("./Taiga"),
  Tundra: require("./Tundra"),
  UndergroundSea: require("./UndergroundSea"),
  Wasteland: require("./Wasteland")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setOLGC = module.exports;}