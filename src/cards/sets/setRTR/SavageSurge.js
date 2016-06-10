"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageSurge extends UnimplementedCard {
  constructor (game) {
    super(game, "Savage Surge", "Return to Ravnica", "RTR");
  }
}

module.exports = SavageSurge;
