"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kraken extends UnimplementedCard {
  constructor (game) {
    super(game, "Kraken", "Masters 25 Tokens", "TA25");
  }
}

module.exports = Kraken;
