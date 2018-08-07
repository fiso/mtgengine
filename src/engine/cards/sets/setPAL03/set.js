"use strict";
module.exports = {
  Bonesplitter: require("./Bonesplitter"),
  ElvishAberration: require("./ElvishAberration"),
  Forest: require("./Forest"),
  Island: require("./Island"),
  Mountain: require("./Mountain"),
  Plains: require("./Plains"),
  SkirkMarauder: require("./SkirkMarauder"),
  Swamp: require("./Swamp")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPAL03 = module.exports;}