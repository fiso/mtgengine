"use strict";
module.exports = {
  Dinosaur: require("./Dinosaur"),
  Illusion: require("./Illusion"),
  IxalanChecklist: require("./IxalanChecklist"),
  Merfolk: require("./Merfolk"),
  Pirate: require("./Pirate"),
  Plant: require("./Plant"),
  Treasure: require("./Treasure"),
  Vampire: require("./Vampire")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTXLN = module.exports;}