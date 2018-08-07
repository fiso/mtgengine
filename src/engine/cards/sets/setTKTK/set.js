"use strict";
module.exports = {
  Bear: require("./Bear"),
  Bird: require("./Bird"),
  Goblin: require("./Goblin"),
  Morph: require("./Morph"),
  SarkhantheDragonspeakerEmblem: require("./SarkhantheDragonspeakerEmblem"),
  Snake: require("./Snake"),
  SorinSolemnVisitorEmblem: require("./SorinSolemnVisitorEmblem"),
  Spirit: require("./Spirit"),
  SpiritWarrior: require("./SpiritWarrior"),
  Vampire: require("./Vampire"),
  Warrior: require("./Warrior"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTKTK = module.exports;}