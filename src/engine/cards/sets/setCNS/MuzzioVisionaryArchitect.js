"use strict";
const Constants = require ("../../../Constants");
const MuzzioVisionaryArchitectBase = require("../setVMA/MuzzioVisionaryArchitect");

class MuzzioVisionaryArchitect extends MuzzioVisionaryArchitectBase {
  constructor (game) {
    super(game, "Muzzio, Visionary Architect", "Conspiracy", "CNS");
  }
}

module.exports = MuzzioVisionaryArchitect;
