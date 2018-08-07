"use strict";
const Constants = require ("../../../Constants");
const TerramorphicExpanseBase = require("../setC18/TerramorphicExpanse");

class TerramorphicExpanse extends TerramorphicExpanseBase {
  constructor (game) {
    super(game, "Terramorphic Expanse", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = TerramorphicExpanse;
