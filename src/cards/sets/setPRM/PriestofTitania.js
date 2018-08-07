"use strict";
const Constants = require ("../../../Constants");
const PriestofTitaniaBase = require("../setCMA/PriestofTitania");

class PriestofTitania extends PriestofTitaniaBase {
  constructor (game) {
    super(game, "Priest of Titania", "Magic Online Promos", "PRM");
  }
}

module.exports = PriestofTitania;
