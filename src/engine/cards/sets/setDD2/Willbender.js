"use strict";
const Constants = require ("../../../Constants");
const WillbenderBase = require("../setA25/Willbender");

class Willbender extends WillbenderBase {
  constructor (game) {
    super(game, "Willbender", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Willbender;
