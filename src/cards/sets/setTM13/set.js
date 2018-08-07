"use strict";
module.exports = {
  Beast: require("./Beast"),
  Cat: require("./Cat"),
  Drake: require("./Drake"),
  Goat: require("./Goat"),
  Goblin: require("./Goblin"),
  Hellion: require("./Hellion"),
  LilianaoftheDarkRealmsEmblem: require("./LilianaoftheDarkRealmsEmblem"),
  Saproling: require("./Saproling"),
  Soldier: require("./Soldier"),
  Wurm: require("./Wurm"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTM13 = module.exports;}