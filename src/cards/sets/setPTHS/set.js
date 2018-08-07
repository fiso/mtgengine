"use strict";
module.exports = {
  AbhorrentOverlord: require("./AbhorrentOverlord"),
  AnthousaSetessanHero: require("./AnthousaSetessanHero"),
  BidentofThassa: require("./BidentofThassa"),
  CelestialArchon: require("./CelestialArchon"),
  EmberSwallower: require("./EmberSwallower"),
  KarametrasAcolyte: require("./KarametrasAcolyte"),
  Nighthowler: require("./Nighthowler"),
  PhalanxLeader: require("./PhalanxLeader"),
  ShipbreakerKraken: require("./ShipbreakerKraken"),
  SylvanCaryatid: require("./SylvanCaryatid")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPTHS = module.exports;}