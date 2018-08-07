"use strict";
const Constants = require ("../../../Constants");
const NicolBolasBase = require("../setA25/NicolBolas");

class NicolBolas extends NicolBolasBase {
  constructor (game) {
    super(game, "Nicol Bolas", "Chronicles", "CHR");
  }
}

module.exports = NicolBolas;
