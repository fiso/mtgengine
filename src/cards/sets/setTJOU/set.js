"use strict";
module.exports = {
  Hydra: require("./Hydra"),
  Minotaur: require("./Minotaur"),
  Snake: require("./Snake"),
  Sphinx: require("./Sphinx"),
  Spider: require("./Spider"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTJOU = module.exports;}