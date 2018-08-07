"use strict";
module.exports = {
  Fireball: require("./Fireball"),
  ManaLeak: require("./ManaLeak"),
  Oxidize: require("./Oxidize"),
  Psychatog: require("./Psychatog"),
  Reciprocate: require("./Reciprocate"),
  Terror: require("./Terror")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setP05 = module.exports;}