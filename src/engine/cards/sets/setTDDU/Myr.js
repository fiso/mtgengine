"use strict";
const Constants = require ("../../../Constants");
const MyrBase = require("../setTC18/Myr");

class Myr extends MyrBase {
  constructor (game) {
    super(game, "Myr", "Duel Decks: Elves vs. Inventors Tokens", "TDDU");
  }
}

module.exports = Myr;
