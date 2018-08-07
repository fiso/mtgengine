"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanctumGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanctum Guardian", "Ninth Edition", "9ED");
  }
}

module.exports = SanctumGuardian;
