"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MuzzioVisionaryArchitectBase = require("../setCNS/MuzzioVisionaryArchitect.js");

class MuzzioVisionaryArchitect extends MuzzioVisionaryArchitectBase {
  constructor(game) {
    super(game, "Muzzio, Visionary Architect", "Vintage Masters", "VMA");
  }
}

module.exports = MuzzioVisionaryArchitect;
