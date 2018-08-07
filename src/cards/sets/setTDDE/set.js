"use strict";
module.exports = {
  Hornet: require("./Hornet"),
  Minion: require("./Minion"),
  Saproling: require("./Saproling")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTDDE = module.exports;}