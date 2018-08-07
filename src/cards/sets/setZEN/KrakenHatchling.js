"use strict";
const Constants = require ("../../../Constants");
const KrakenHatchlingBase = require("../setBBD/KrakenHatchling");

class KrakenHatchling extends KrakenHatchlingBase {
  constructor (game) {
    super(game, "Kraken Hatchling", "Zendikar", "ZEN");
  }
}

module.exports = KrakenHatchling;
