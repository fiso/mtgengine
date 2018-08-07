"use strict";
module.exports = {
  BloodlordofVaasgoth: require("./BloodlordofVaasgoth"),
  ChandrasPhoenix: require("./ChandrasPhoenix"),
  DungroveElder: require("./DungroveElder"),
  GarruksHorde: require("./GarruksHorde"),
  StormbloodBerserker: require("./StormbloodBerserker")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPM12 = module.exports;}