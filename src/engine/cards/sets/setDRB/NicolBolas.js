"use strict";
const Constants = require ("../../../Constants");
const NicolBolasBase = require("../setA25/NicolBolas");

class NicolBolas extends NicolBolasBase {
  constructor (game) {
    super(game, "Nicol Bolas", "From the Vault: Dragons", "DRB");
  }
}

module.exports = NicolBolas;
