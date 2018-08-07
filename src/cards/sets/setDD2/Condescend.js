"use strict";
const Constants = require ("../../../Constants");
const CondescendBase = require("../setIMA/Condescend");

class Condescend extends CondescendBase {
  constructor (game) {
    super(game, "Condescend", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Condescend;
