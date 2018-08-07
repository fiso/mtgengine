"use strict";
module.exports = {
  Memnite: require("./Memnite"),
  Memoricide: require("./Memoricide"),
  SteelHellkite: require("./SteelHellkite"),
  TemperedSteel: require("./TemperedSteel"),
  WurmcoilEngine: require("./WurmcoilEngine")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPSOM = module.exports;}