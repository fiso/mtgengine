"use strict";
const Constants = require ("../../../Constants");
const PriestofTitaniaBase = require("../setCMA/PriestofTitania");

class PriestofTitania extends PriestofTitaniaBase {
  constructor (game) {
    super(game, "Priest of Titania", "Urza's Saga", "USG");
  }
}

module.exports = PriestofTitania;
