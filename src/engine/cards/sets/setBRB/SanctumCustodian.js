"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanctumCustodian extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanctum Custodian", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SanctumCustodian;
