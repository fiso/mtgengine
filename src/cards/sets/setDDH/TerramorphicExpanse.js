"use strict";
const Constants = require ("../../../Constants");
const TerramorphicExpanseBase = require("../setARC/TerramorphicExpanse");

class TerramorphicExpanse extends TerramorphicExpanseBase {
  constructor (game) {
    super(game, "Terramorphic Expanse", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = TerramorphicExpanse;
