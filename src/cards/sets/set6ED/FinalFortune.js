"use strict";
const Constants = require ("../../../Constants");
const FinalFortuneBase = require("../set7ED/FinalFortune");

class FinalFortune extends FinalFortuneBase {
  constructor (game) {
    super(game, "Final Fortune", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FinalFortune;
