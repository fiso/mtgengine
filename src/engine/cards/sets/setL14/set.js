"use strict";
module.exports = {
  Minotaur: require("./Minotaur"),
  Soldier: require("./Soldier"),
  Squid: require("./Squid"),
  Warrior: require("./Warrior")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setL14 = module.exports;}