"use strict";
const Constants = require ("../../../Constants");
const GriffinBase = require("../setTDDL/Griffin");

class Griffin extends GriffinBase {
  constructor (game) {
    super(game, "Griffin", "Duel Decks: Ajani vs. Nicol Bolas Tokens", "TDDH");
  }
}

module.exports = Griffin;
