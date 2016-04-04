"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SickleRipperBase = require("../setMM2/SickleRipper.js");

class SickleRipper extends SickleRipperBase {
  constructor(game) {
    super(game, "Sickle Ripper", "Shadowmoor", "SHM");
  }
}

module.exports = SickleRipper;
