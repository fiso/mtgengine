"use strict";
module.exports = {
  EldraziSpawn: require("./EldraziSpawn"),
  Elephant: require("./Elephant"),
  FaerieRogue: require("./FaerieRogue"),
  Germ: require("./Germ"),
  Golem: require("./Golem"),
  Insect: require("./Insect"),
  Myr: require("./Myr"),
  Saproling: require("./Saproling"),
  Snake: require("./Snake"),
  Soldier: require("./Soldier"),
  Spirit: require("./Spirit"),
  Thrull: require("./Thrull"),
  Wolf: require("./Wolf"),
  Worm: require("./Worm")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTMM2 = module.exports;}