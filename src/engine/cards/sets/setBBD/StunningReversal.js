"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StunningReversal extends UnimplementedCard {
  constructor (game) {
    super(game, "Stunning Reversal", "Battlebond", "BBD");
  }
}

module.exports = StunningReversal;
