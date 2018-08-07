"use strict";
const Constants = require ("../../../Constants");
const PiasRevolutionBase = require("../setAER/PiasRevolution");

class PiasRevolution extends PiasRevolutionBase {
  constructor (game) {
    super(game, "Pia's Revolution", "Aether Revolt Promos", "PAER");
  }
}

module.exports = PiasRevolution;
