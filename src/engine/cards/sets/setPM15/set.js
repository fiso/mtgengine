"use strict";
module.exports = {
  ChiefEngineer: require("./ChiefEngineer"),
  GoblinRabblemaster: require("./GoblinRabblemaster"),
  IndulgentTormentor: require("./IndulgentTormentor"),
  InGarruksWake: require("./InGarruksWake"),
  MercurialPretender: require("./MercurialPretender"),
  Phytotitan: require("./Phytotitan"),
  ReclamationSage: require("./ReclamationSage"),
  ResoluteArchangel: require("./ResoluteArchangel"),
  SiegeDragon: require("./SiegeDragon")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPM15 = module.exports;}