"use strict";
const Constants = require ("../../../Constants");
const FieryFallBase = require("../setCON/FieryFall");

class FieryFall extends FieryFallBase {
  constructor (game) {
    super(game, "Fiery Fall", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = FieryFall;
