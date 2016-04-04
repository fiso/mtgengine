"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaoticStrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Chaotic Strike", "Invasion", "INV");
  }
}

module.exports = ChaoticStrike;
