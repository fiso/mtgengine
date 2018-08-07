"use strict";
module.exports = {
  Manifest: require("./Manifest"),
  Monk: require("./Monk"),
  Spirit: require("./Spirit"),
  Warrior: require("./Warrior")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTFRF = module.exports;}