"use strict";
module.exports = {
  Beast: require("./Beast"),
  Myr: require("./Myr"),
  RowanKenrithEmblem: require("./RowanKenrithEmblem"),
  Spirit: require("./Spirit"),
  Warrior: require("./Warrior"),
  WillKenrithEmblem: require("./WillKenrithEmblem"),
  Zombie: require("./Zombie"),
  ZombieGiant: require("./ZombieGiant")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTBBD = module.exports;}