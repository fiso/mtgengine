"use strict";
module.exports = {
  DjinnMonk: require("./DjinnMonk"),
  Dragon: require("./Dragon"),
  Goblin: require("./Goblin"),
  Morph: require("./Morph"),
  NarsetTranscendentEmblem: require("./NarsetTranscendentEmblem"),
  Warrior: require("./Warrior"),
  Zombie: require("./Zombie"),
  ZombieHorror: require("./ZombieHorror")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTDTK = module.exports;}