"use strict";
const Constants = require ("../../../Constants");
const WillbenderBase = require("../setC14/Willbender");

class Willbender extends WillbenderBase {
  constructor(game) {
    super(game, "Willbender", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = Willbender;
