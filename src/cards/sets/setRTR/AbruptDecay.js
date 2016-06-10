"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbruptDecay extends UnimplementedCard {
  constructor (game) {
    super(game, "Abrupt Decay", "Return to Ravnica", "RTR");
  }
}

module.exports = AbruptDecay;
