"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FishKraken extends UnimplementedCard {
  constructor (game) {
    super(game, "Fish // Kraken", "Masters 25 Tokens", "TA25");
  }
}

module.exports = FishKraken;
