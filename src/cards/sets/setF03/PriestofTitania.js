"use strict";
const Constants = require ("../../../Constants");
const PriestofTitaniaBase = require("../setCMA/PriestofTitania");

class PriestofTitania extends PriestofTitaniaBase {
  constructor (game) {
    super(game, "Priest of Titania", "Friday Night Magic 2003", "F03");
  }
}

module.exports = PriestofTitania;
