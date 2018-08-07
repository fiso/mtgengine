"use strict";
module.exports = {
  Corrupt: require("./Corrupt"),
  GazeofGranite: require("./GazeofGranite"),
  HighTide: require("./HighTide"),
  OgreArsonist: require("./OgreArsonist"),
  VoidmageHusher: require("./VoidmageHusher")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPI13 = module.exports;}