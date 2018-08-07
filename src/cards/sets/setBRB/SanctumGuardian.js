"use strict";
const Constants = require ("../../../Constants");
const SanctumGuardianBase = require("../set9ED/SanctumGuardian");

class SanctumGuardian extends SanctumGuardianBase {
  constructor (game) {
    super(game, "Sanctum Guardian", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SanctumGuardian;
