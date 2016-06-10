"use strict";
const Constants = require ("../../../Constants");
const FallBase = require("../setDIS/Fall");

class Fall extends FallBase {
  constructor (game) {
    super(game, "Fall", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Fall;
