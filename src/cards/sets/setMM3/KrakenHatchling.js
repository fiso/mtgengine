"use strict";
const Constants = require ("../../../Constants");
const KrakenHatchlingBase = require("../setBBD/KrakenHatchling");

class KrakenHatchling extends KrakenHatchlingBase {
  constructor (game) {
    super(game, "Kraken Hatchling", "Modern Masters 2017", "MM3");
  }
}

module.exports = KrakenHatchling;
