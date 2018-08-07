"use strict";
module.exports = {
  AncientHellkite: require("./AncientHellkite"),
  BirdsofParadise: require("./BirdsofParadise"),
  LilianasSpecter: require("./LilianasSpecter"),
  MitoticSlime: require("./MitoticSlime"),
  SunTitan: require("./SunTitan")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPM11 = module.exports;}