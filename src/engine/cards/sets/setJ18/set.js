"use strict";
module.exports = {
  CommandersSphere: require("./CommandersSphere"),
  MerchantScroll: require("./MerchantScroll"),
  NinthePainArtist: require("./NinthePainArtist"),
  VampiricTutor: require("./VampiricTutor")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setJ18 = module.exports;}