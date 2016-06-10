"use strict";
const Constants = require ("../../../Constants");
const KnightlyValorBase = require("../setORI/KnightlyValor");

class KnightlyValor extends KnightlyValorBase {
  constructor (game) {
    super(game, "Knightly Valor", "Return to Ravnica", "RTR");
  }
}

module.exports = KnightlyValor;
