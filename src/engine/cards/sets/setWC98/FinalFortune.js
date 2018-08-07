"use strict";
const Constants = require ("../../../Constants");
const FinalFortuneBase = require("../set7ED/FinalFortune");

class FinalFortune extends FinalFortuneBase {
  constructor (game) {
    super(game, "Final Fortune", "World Championship Decks 1998", "WC98");
  }
}

module.exports = FinalFortune;
