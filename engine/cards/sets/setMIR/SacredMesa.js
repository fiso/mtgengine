"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SacredMesaBase = require("../setATH/SacredMesa.js");

class SacredMesa extends SacredMesaBase {
  constructor(game) {
    super(game, "Sacred Mesa", "Mirage", "MIR");
  }
}

module.exports = SacredMesa;
