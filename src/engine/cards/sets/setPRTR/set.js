"use strict";
module.exports = {
  ArchonoftheTriumvirate: require("./ArchonoftheTriumvirate"),
  CarnivalHellsteed: require("./CarnivalHellsteed"),
  CorpsejackMenace: require("./CorpsejackMenace"),
  CryptbornHorror: require("./CryptbornHorror"),
  DeadbridgeGoliath: require("./DeadbridgeGoliath"),
  DregMangler: require("./DregMangler"),
  DryadMilitant: require("./DryadMilitant"),
  GroveoftheGuardian: require("./GroveoftheGuardian"),
  HypersonicDragon: require("./HypersonicDragon"),
  SupremeVerdict: require("./SupremeVerdict")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPRTR = module.exports;}