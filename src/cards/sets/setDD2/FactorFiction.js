"use strict";
const Constants = require ("../../../Constants");
const FactorFictionBase = require("../setCM2/FactorFiction");

class FactorFiction extends FactorFictionBase {
  constructor (game) {
    super(game, "Fact or Fiction", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = FactorFiction;
