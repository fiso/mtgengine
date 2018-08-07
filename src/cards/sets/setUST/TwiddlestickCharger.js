"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwiddlestickCharger extends UnimplementedCard {
  constructor (game) {
    super(game, "Twiddlestick Charger", "Unstable", "UST");
  }
}

module.exports = TwiddlestickCharger;
