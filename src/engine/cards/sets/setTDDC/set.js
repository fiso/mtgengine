"use strict";
module.exports = {
  Demon: require("./Demon"),
  Spirit: require("./Spirit"),
  Thrull: require("./Thrull")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTDDC = module.exports;}