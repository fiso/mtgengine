"use strict";
module.exports = {
  ElspethKnightErrantEmblem: require("./ElspethKnightErrantEmblem"),
  Myr: require("./Myr"),
  Soldier: require("./Soldier"),
  Spirit: require("./Spirit")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTMD1 = module.exports;}