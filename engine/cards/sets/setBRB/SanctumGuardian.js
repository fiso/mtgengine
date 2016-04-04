"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SanctumGuardian extends Card {
  constructor(game) {
    super(game, "Sanctum Guardian", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SanctumGuardian;
