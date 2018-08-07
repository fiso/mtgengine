"use strict";
const Constants = require ("../../../Constants");
const PriestofTitaniaBase = require("../setCMA/PriestofTitania");

class PriestofTitania extends PriestofTitaniaBase {
  constructor (game) {
    super(game, "Priest of Titania", "World Championship Decks 2000", "WC00");
  }
}

module.exports = PriestofTitania;
