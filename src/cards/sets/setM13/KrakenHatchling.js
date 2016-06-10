"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrakenHatchling extends UnimplementedCard {
  constructor (game) {
    super(game, "Kraken Hatchling", "Magic 2013", "M13");
  }
}

module.exports = KrakenHatchling;
