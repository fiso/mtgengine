"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnightlyValorBase = require("../setORI/KnightlyValor.js");

class KnightlyValor extends KnightlyValorBase {
  constructor(game) {
    super(game, "Knightly Valor", "Return to Ravnica", "RTR");
  }
}

module.exports = KnightlyValor;
