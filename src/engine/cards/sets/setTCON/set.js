"use strict";
module.exports = {
  Angel: require("./Angel"),
  Elemental: require("./Elemental")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTCON = module.exports;}