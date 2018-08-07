"use strict";
const Constants = require ("../../../Constants");
const SickleRipperBase = require("../setMM2/SickleRipper");

class SickleRipper extends SickleRipperBase {
  constructor (game) {
    super(game, "Sickle Ripper", "Shadowmoor", "SHM");
  }
}

module.exports = SickleRipper;
