"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrakenHatchling extends Card {
  constructor(game) {
    super(game, "Kraken Hatchling", "Magic 2013", "M13");
  }
}

module.exports = KrakenHatchling;
