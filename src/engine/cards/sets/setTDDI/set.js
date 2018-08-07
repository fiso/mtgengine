"use strict";
module.exports = {
  KothoftheHammerEmblem: require("./KothoftheHammerEmblem"),
  VensertheSojournerEmblem: require("./VensertheSojournerEmblem")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTDDI = module.exports;}