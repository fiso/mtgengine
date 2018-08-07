"use strict";
module.exports = {
  MyrSuperion: require("./MyrSuperion"),
  PhyrexianMetamorph: require("./PhyrexianMetamorph"),
  PriestofUrabrask: require("./PriestofUrabrask"),
  PristineTalisman: require("./PristineTalisman"),
  SheoldredWhisperingOne: require("./SheoldredWhisperingOne"),
  SurgicalExtraction: require("./SurgicalExtraction")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPNPH = module.exports;}