"use strict";
const Constants = require ("../../../Constants");
const FactorFictionBase = require("../setC15/FactorFiction");

class FactorFiction extends FactorFictionBase {
  constructor (game) {
    super(game, "Fact or Fiction", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = FactorFiction;
