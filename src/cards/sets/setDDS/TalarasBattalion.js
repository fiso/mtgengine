"use strict";
const Constants = require ("../../../Constants");
const TalarasBattalionBase = require("../setDDU/TalarasBattalion");

class TalarasBattalion extends TalarasBattalionBase {
  constructor (game) {
    super(game, "Talara's Battalion", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = TalarasBattalion;
