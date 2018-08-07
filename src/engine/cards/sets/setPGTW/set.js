"use strict";
module.exports = {
  FieryTemper: require("./FieryTemper"),
  IcatianJavelineers: require("./IcatianJavelineers"),
  WoodElves: require("./WoodElves")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPGTW = module.exports;}