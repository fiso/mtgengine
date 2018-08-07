"use strict";
module.exports = {
  ExaltedAngel: require("./ExaltedAngel"),
  GrimLavamancer: require("./GrimLavamancer"),
  MeddlingMage: require("./MeddlingMage"),
  PerniciousDeed: require("./PerniciousDeed")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setG06 = module.exports;}