"use strict";
const Constants = require ("../../../Constants");
const MuzzioVisionaryArchitectBase = require("../setCNS/MuzzioVisionaryArchitect");

class MuzzioVisionaryArchitect extends MuzzioVisionaryArchitectBase {
  constructor(game) {
    super(game, "Muzzio, Visionary Architect", "Vintage Masters", "VMA");
  }
}

module.exports = MuzzioVisionaryArchitect;
