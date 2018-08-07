"use strict";
module.exports = {
  Cleric: require("./Cleric"),
  Construct: require("./Construct"),
  Demon: require("./Demon"),
  Elemental: require("./Elemental"),
  Goblin: require("./Goblin"),
  JayaBallardEmblem: require("./JayaBallardEmblem"),
  KaroxBladewing: require("./KaroxBladewing"),
  Knight: require("./Knight"),
  NightmareHorror: require("./NightmareHorror"),
  Saproling: require("./Saproling"),
  Soldier: require("./Soldier"),
  TeferiHeroofDominariaEmblem: require("./TeferiHeroofDominariaEmblem"),
  ZombieKnight: require("./ZombieKnight")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTDOM = module.exports;}