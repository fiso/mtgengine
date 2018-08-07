"use strict";
module.exports = {
  Griffin: require("./Griffin"),
  Saproling: require("./Saproling")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTDDH = module.exports;}