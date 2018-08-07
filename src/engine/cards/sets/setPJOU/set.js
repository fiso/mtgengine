"use strict";
module.exports = {
  DawnbringerCharioteers: require("./DawnbringerCharioteers"),
  DictateofKruphix: require("./DictateofKruphix"),
  DictateoftheTwinGods: require("./DictateoftheTwinGods"),
  DoomwakeGiant: require("./DoomwakeGiant"),
  EidolonofBlossoms: require("./EidolonofBlossoms"),
  HeroesBane: require("./HeroesBane"),
  ScourgeofFleets: require("./ScourgeofFleets"),
  SpawnofThraxes: require("./SpawnofThraxes"),
  SquelchingLeeches: require("./SquelchingLeeches")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPJOU = module.exports;}