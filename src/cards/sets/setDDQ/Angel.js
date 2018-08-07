"use strict";
const Constants = require ("../../../Constants");
const AngelBase = require("../setTC18/Angel");

class Angel extends AngelBase {
  constructor (game) {
    super(game, "Angel", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Angel;
