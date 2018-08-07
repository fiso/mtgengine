"use strict";
module.exports = {
  BasandraBattleSeraph: require("./BasandraBattleSeraph"),
  EdricSpymasterofTrest: require("./EdricSpymasterofTrest"),
  NinthePainArtist: require("./NinthePainArtist"),
  SkullbriartheWalkingGrave: require("./SkullbriartheWalkingGrave"),
  VishKalBloodArbiter: require("./VishKalBloodArbiter")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPCMD = module.exports;}