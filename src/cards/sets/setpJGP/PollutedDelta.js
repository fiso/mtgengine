"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PollutedDelta extends UnimplementedCard {
  constructor(game) {
    super(game, "Polluted Delta", "Judge Gift Program", "pJGP");
  }
}

module.exports = PollutedDelta;
