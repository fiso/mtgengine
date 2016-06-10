"use strict";
const Constants = require ("../../../Constants");
const KrakenHatchlingBase = require("../setM13/KrakenHatchling");

class KrakenHatchling extends KrakenHatchlingBase {
  constructor (game) {
    super(game, "Kraken Hatchling", "Zendikar", "ZEN");
  }
}

module.exports = KrakenHatchling;
