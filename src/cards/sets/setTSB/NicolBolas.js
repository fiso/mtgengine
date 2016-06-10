"use strict";
const Constants = require ("../../../Constants");
const NicolBolasBase = require("../setCHR/NicolBolas");

class NicolBolas extends NicolBolasBase {
  constructor (game) {
    super(game, "Nicol Bolas", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = NicolBolas;
