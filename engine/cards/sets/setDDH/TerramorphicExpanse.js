"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TerramorphicExpanseBase = require("../setARC/TerramorphicExpanse.js");

class TerramorphicExpanse extends TerramorphicExpanseBase {
  constructor(game) {
    super(game, "Terramorphic Expanse", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = TerramorphicExpanse;
