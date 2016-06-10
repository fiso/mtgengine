"use strict";
module.exports = {
  Counterspell: require("./Counterspell"),
  Incinerate: require("./Incinerate")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setpLGM = module.exports;}