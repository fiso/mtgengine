"use strict";
module.exports = {
  TheAvenger: require("./TheAvenger"),
  TheHarvester: require("./TheHarvester"),
  TheHunter: require("./TheHunter"),
  ThePhilosopher: require("./ThePhilosopher"),
  TheProtector: require("./TheProtector"),
  TheSlayer: require("./TheSlayer"),
  TheWarrior: require("./TheWarrior")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTHP1 = module.exports;}