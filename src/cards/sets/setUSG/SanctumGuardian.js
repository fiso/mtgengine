"use strict";
const Constants = require ("../../../Constants");
const SanctumGuardianBase = require("../setBRB/SanctumGuardian");

class SanctumGuardian extends SanctumGuardianBase {
  constructor (game) {
    super(game, "Sanctum Guardian", "Urza's Saga", "USG");
  }
}

module.exports = SanctumGuardian;
