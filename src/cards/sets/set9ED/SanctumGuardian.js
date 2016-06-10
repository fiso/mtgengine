"use strict";
const Constants = require ("../../../Constants");
const SanctumGuardianBase = require("../setBRB/SanctumGuardian");

class SanctumGuardian extends SanctumGuardianBase {
  constructor (game) {
    super(game, "Sanctum Guardian", "Ninth Edition", "9ED");
  }
}

module.exports = SanctumGuardian;
