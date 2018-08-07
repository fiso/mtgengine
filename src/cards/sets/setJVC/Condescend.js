"use strict";
const Constants = require ("../../../Constants");
const CondescendBase = require("../setIMA/Condescend");

class Condescend extends CondescendBase {
  constructor (game) {
    super(game, "Condescend", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = Condescend;
