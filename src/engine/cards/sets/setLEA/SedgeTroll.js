"use strict";
const Constants = require ("../../../Constants");
const SedgeTrollBase = require("../setME4/SedgeTroll");

class SedgeTroll extends SedgeTrollBase {
  constructor (game) {
    super(game, "Sedge Troll", "Limited Edition Alpha", "LEA");
  }
}

module.exports = SedgeTroll;
