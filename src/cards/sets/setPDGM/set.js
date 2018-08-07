"use strict";
module.exports = {
  BreakingEntering: require("./BreakingEntering"),
  MazesEnd: require("./MazesEnd"),
  MelekIzzetParagon: require("./MelekIzzetParagon"),
  Plains: require("./Plains"),
  RenderSilent: require("./RenderSilent"),
  TrostanisSummoner: require("./TrostanisSummoner")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPDGM = module.exports;}