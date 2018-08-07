"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BetterThanOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Better Than One", "Unstable", "UST");
  }
}

module.exports = BetterThanOne;
