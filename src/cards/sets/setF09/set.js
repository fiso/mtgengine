"use strict";
module.exports = {
  Browbeat: require("./Browbeat"),
  KitchenFinks: require("./KitchenFinks"),
  LightningGreaves: require("./LightningGreaves"),
  MagmaJet: require("./MagmaJet"),
  MerrowReejerey: require("./MerrowReejerey"),
  Mulldrifter: require("./Mulldrifter"),
  MurderousRedcap: require("./MurderousRedcap"),
  MyrEnforcer: require("./MyrEnforcer"),
  OblivionRing: require("./OblivionRing"),
  SakuraTribeElder: require("./SakuraTribeElder"),
  Watchwolf: require("./Watchwolf"),
  WrensRunVanquisher: require("./WrensRunVanquisher")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setF09 = module.exports;}