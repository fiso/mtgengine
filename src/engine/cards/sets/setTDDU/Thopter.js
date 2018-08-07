"use strict";
const Constants = require ("../../../Constants");
const ThopterBase = require("../setTC18/Thopter");

class Thopter extends ThopterBase {
  constructor (game) {
    super(game, "Thopter", "Duel Decks: Elves vs. Inventors Tokens", "TDDU");
  }
}

module.exports = Thopter;
