"use strict";
module.exports = {
  Acquire: require("./Acquire"),
  Duress: require("./Duress"),
  WashOut: require("./WashOut")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPI14 = module.exports;}