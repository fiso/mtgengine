"use strict";
module.exports = {
  Angel: require("./Angel"),
  AshayatheAwokenWorld: require("./AshayatheAwokenWorld"),
  ChandraRoaringFlameEmblem: require("./ChandraRoaringFlameEmblem"),
  Demon: require("./Demon"),
  Elemental: require("./Elemental"),
  ElfWarrior: require("./ElfWarrior"),
  Goblin: require("./Goblin"),
  JaceTelepathUnboundEmblem: require("./JaceTelepathUnboundEmblem"),
  Knight: require("./Knight"),
  LilianaDefiantNecromancerEmblem: require("./LilianaDefiantNecromancerEmblem"),
  MagicOriginsChecklist: require("./MagicOriginsChecklist"),
  Soldier: require("./Soldier"),
  Thopter: require("./Thopter"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTORI = module.exports;}