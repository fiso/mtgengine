"use strict";
module.exports = {
  Counterspell: require("./Counterspell"),
  VampiricTutor: require("./VampiricTutor")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setG00 = module.exports;}