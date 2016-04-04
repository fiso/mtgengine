"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChaoticStrike extends Card {
  constructor(game) {
    super(game, "Chaotic Strike", "Invasion", "INV");
  }
}

module.exports = ChaoticStrike;
