"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanctumGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanctum Guardian", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SanctumGuardian;
