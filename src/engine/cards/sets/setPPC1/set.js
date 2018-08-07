"use strict";
module.exports = {
  GarruktheSlayer: require("./GarruktheSlayer"),
  Wolf: require("./Wolf")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPPC1 = module.exports;}