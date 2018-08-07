"use strict";
module.exports = {
  Beast: require("./Beast"),
  Griffin: require("./Griffin")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTDDL = module.exports;}