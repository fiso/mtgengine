"use strict";
module.exports = {
  Goblin: require("./Goblin"),
  Knight: require("./Knight")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setL12 = module.exports;}