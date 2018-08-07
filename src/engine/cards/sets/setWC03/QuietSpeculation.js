"use strict";
const Constants = require ("../../../Constants");
const QuietSpeculationBase = require("../setEMA/QuietSpeculation");

class QuietSpeculation extends QuietSpeculationBase {
  constructor (game) {
    super(game, "Quiet Speculation", "World Championship Decks 2003", "WC03");
  }
}

module.exports = QuietSpeculation;
