"use strict";
const Constants = require ("../../../Constants");
const FleshEaterImpBase = require("../setTD2/FleshEaterImp");

class FleshEaterImp extends FleshEaterImpBase {
  constructor (game) {
    super(game, "Flesh-Eater Imp", "Mirrodin Besieged", "MBS");
  }
}

module.exports = FleshEaterImp;
