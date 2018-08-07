"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PoisonCounter extends UnimplementedCard {
  constructor (game) {
    super(game, "Poison Counter", "New Phyrexia Tokens", "TNPH");
  }
}

module.exports = PoisonCounter;
