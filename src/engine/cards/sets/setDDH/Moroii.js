"use strict";
const Constants = require ("../../../Constants");
const MoroiiBase = require("../setMM3/Moroii");

class Moroii extends MoroiiBase {
  constructor (game) {
    super(game, "Moroii", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Moroii;
