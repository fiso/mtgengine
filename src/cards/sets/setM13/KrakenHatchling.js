"use strict";
const Constants = require ("../../../Constants");
const KrakenHatchlingBase = require("../setBBD/KrakenHatchling");

class KrakenHatchling extends KrakenHatchlingBase {
  constructor (game) {
    super(game, "Kraken Hatchling", "Magic 2013", "M13");
  }
}

module.exports = KrakenHatchling;
