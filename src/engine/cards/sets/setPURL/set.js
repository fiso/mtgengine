"use strict";
module.exports = {
  AeronautTinkerer: require("./AeronautTinkerer"),
  BloodthroneVampire: require("./BloodthroneVampire"),
  ChandrasFury: require("./ChandrasFury"),
  KorSkyfisher: require("./KorSkyfisher"),
  MagisterofWorth: require("./MagisterofWorth"),
  MerfolkMesmerist: require("./MerfolkMesmerist"),
  StealerofSecrets: require("./StealerofSecrets"),
  StewardofValeron: require("./StewardofValeron")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPURL = module.exports;}