"use strict";
module.exports = {
  Angel: require("./Angel"),
  Beast: require("./Beast"),
  Cat: require("./Cat"),
  Dragon: require("./Dragon"),
  Elemental: require("./Elemental"),
  GarrukCallerofBeastsEmblem: require("./GarrukCallerofBeastsEmblem"),
  Goat: require("./Goat"),
  LilianaoftheDarkRealmsEmblem: require("./LilianaoftheDarkRealmsEmblem"),
  Saproling: require("./Saproling"),
  Sliver: require("./Sliver"),
  Wolf: require("./Wolf"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTM14 = module.exports;}