"use strict";
const Constants = require ("../../../Constants");
const SpiritualGuardianBase = require("../setMTGA/SpiritualGuardian");

class SpiritualGuardian extends SpiritualGuardianBase {
  constructor (game) {
    super(game, "Spiritual Guardian", "Portal", "POR");
  }
}

module.exports = SpiritualGuardian;
