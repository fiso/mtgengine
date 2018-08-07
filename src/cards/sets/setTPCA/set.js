"use strict";
module.exports = {
  Angel: require("./Angel"),
  Beast: require("./Beast"),
  Boar: require("./Boar"),
  Dragon: require("./Dragon"),
  Eldrazi: require("./Eldrazi"),
  EldraziSpawn: require("./EldraziSpawn"),
  Germ: require("./Germ"),
  Goat: require("./Goat"),
  Goblin: require("./Goblin"),
  Hellion: require("./Hellion"),
  Insect: require("./Insect"),
  Ooze: require("./Ooze"),
  Ooze: require("./Ooze"),
  Plant: require("./Plant"),
  Saproling: require("./Saproling"),
  Spider: require("./Spider"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTPCA = module.exports;}