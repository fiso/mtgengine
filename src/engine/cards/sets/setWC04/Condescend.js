"use strict";
const Constants = require ("../../../Constants");
const CondescendBase = require("../setIMA/Condescend");

class Condescend extends CondescendBase {
  constructor (game) {
    super(game, "Condescend", "World Championship Decks 2004", "WC04");
  }
}

module.exports = Condescend;
