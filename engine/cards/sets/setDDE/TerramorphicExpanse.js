"use strict";
const Constants = require ("../../../Constants");
const TerramorphicExpanseBase = require("../setARC/TerramorphicExpanse");

class TerramorphicExpanse extends TerramorphicExpanseBase {
  constructor(game) {
    super(game, "Terramorphic Expanse", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = TerramorphicExpanse;
