"use strict";
module.exports = {
  GiantGrowth: require("./GiantGrowth"),
  Hinder: require("./Hinder"),
  HypnoticSpecter: require("./HypnoticSpecter"),
  LightningHelix: require("./LightningHelix"),
  Putrefy: require("./Putrefy"),
  Pyroclasm: require("./Pyroclasm"),
  Zombify: require("./Zombify")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setP06 = module.exports;}