"use strict";
const Constants = require ("../../../Constants");
const ReprisalBase = require("../setJOU/Reprisal");

class Reprisal extends ReprisalBase {
  constructor (game) {
    super(game, "Reprisal", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Reprisal;
