"use strict";
module.exports = {
  AngelDemon: require("./AngelDemon"),
  AvacynAngelofHope: require("./AvacynAngelofHope"),
  BrunaLightofAlabaster: require("./BrunaLightofAlabaster"),
  GiselaBladeofGoldnight: require("./GiselaBladeofGoldnight"),
  Griselbrand: require("./Griselbrand"),
  SigardaHostofHerons: require("./SigardaHostofHerons")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPHEL = module.exports;}