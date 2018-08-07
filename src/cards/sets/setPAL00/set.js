"use strict";
module.exports = {
  Chill: require("./Chill"),
  Duress: require("./Duress"),
  EnlightenedTutor: require("./EnlightenedTutor"),
  Forest: require("./Forest"),
  Island: require("./Island"),
  Mountain: require("./Mountain"),
  Pillage: require("./Pillage"),
  Plains: require("./Plains"),
  Stupor: require("./Stupor"),
  Swamp: require("./Swamp"),
  UktabiOrangutan: require("./UktabiOrangutan")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPAL00 = module.exports;}