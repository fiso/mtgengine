"use strict";
const Constants = require ("../../../Constants");
const SacredMesaBase = require("../setC14/SacredMesa");

class SacredMesa extends SacredMesaBase {
  constructor (game) {
    super(game, "Sacred Mesa", "Anthologies", "ATH");
  }
}

module.exports = SacredMesa;
