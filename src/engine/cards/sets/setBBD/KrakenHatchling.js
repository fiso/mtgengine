"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrakenHatchling extends UnimplementedCard {
  constructor (game) {
    super(game, "Kraken Hatchling", "Battlebond", "BBD");
  }
}

module.exports = KrakenHatchling;
