"use strict";
module.exports = {
  Beast: require("./Beast"),
  ChandraTorchofDefianceEmblem: require("./ChandraTorchofDefianceEmblem"),
  Construct: require("./Construct"),
  DovinBaanEmblem: require("./DovinBaanEmblem"),
  EnergyReserve: require("./EnergyReserve"),
  NissaVitalForceEmblem: require("./NissaVitalForceEmblem"),
  Servo: require("./Servo"),
  Thopter: require("./Thopter")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTKLD = module.exports;}