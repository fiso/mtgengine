"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageTwister extends UnimplementedCard {
  constructor (game) {
    super(game, "Savage Twister", "Archenemy", "ARC");
  }
}

module.exports = SavageTwister;
