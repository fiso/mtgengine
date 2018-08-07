"use strict";
const Constants = require ("../../../Constants");
const AbductionBase = require("../set6ED/Abduction");

class Abduction extends AbductionBase {
  constructor (game) {
    super(game, "Abduction", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Abduction;
