"use strict";
module.exports = {
  BirdSoldier: require("./BirdSoldier"),
  Dragon: require("./Dragon"),
  Lizard: require("./Lizard"),
  ZombieWizard: require("./ZombieWizard")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTARB = module.exports;}