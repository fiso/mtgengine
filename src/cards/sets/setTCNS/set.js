"use strict";
module.exports = {
  Construct: require("./Construct"),
  DackFaydenEmblem: require("./DackFaydenEmblem"),
  Demon: require("./Demon"),
  Elephant: require("./Elephant"),
  Ogre: require("./Ogre"),
  Spirit: require("./Spirit"),
  Squirrel: require("./Squirrel"),
  Wolf: require("./Wolf"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTCNS = module.exports;}