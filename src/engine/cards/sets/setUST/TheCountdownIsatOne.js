"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheCountdownIsatOne extends UnimplementedCard {
  constructor (game) {
    super(game, "The Countdown Is at One", "Unstable", "UST");
  }
}

module.exports = TheCountdownIsatOne;
