"use strict";
const Constants = require ("../../../Constants");
const SacredMesaBase = require("../setATH/SacredMesa");

class SacredMesa extends SacredMesaBase {
  constructor(game) {
    super(game, "Sacred Mesa", "Mirage", "MIR");
  }
}

module.exports = SacredMesa;
