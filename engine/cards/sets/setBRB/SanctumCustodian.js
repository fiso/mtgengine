"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SanctumCustodian extends Card {
  constructor(game) {
    super(game, "Sanctum Custodian", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SanctumCustodian;
