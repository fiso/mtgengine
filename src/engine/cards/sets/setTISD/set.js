"use strict";
module.exports = {
  Angel: require("./Angel"),
  Demon: require("./Demon"),
  Homunculus: require("./Homunculus"),
  InnistradChecklist: require("./InnistradChecklist"),
  Ooze: require("./Ooze"),
  Spider: require("./Spider"),
  Spirit: require("./Spirit"),
  Vampire: require("./Vampire"),
  Wolf: require("./Wolf"),
  Wolf: require("./Wolf"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTISD = module.exports;}