"use strict";
const Constants = require ("../../../Constants");
const EerieInterludeBase = require("../setSOI/EerieInterlude");

class EerieInterlude extends EerieInterludeBase {
  constructor (game) {
    super(game, "Eerie Interlude", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = EerieInterlude;
