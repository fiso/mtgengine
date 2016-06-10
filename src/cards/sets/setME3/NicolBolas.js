"use strict";
const Constants = require ("../../../Constants");
const NicolBolasBase = require("../setCHR/NicolBolas");

class NicolBolas extends NicolBolasBase {
  constructor (game) {
    super(game, "Nicol Bolas", "Masters Edition III", "ME3");
  }
}

module.exports = NicolBolas;
