"use strict";
const Constants = require ("../../../Constants");
const PrimalPlasmaBase = require("../setPCA/PrimalPlasma");

class PrimalPlasma extends PrimalPlasmaBase {
  constructor (game) {
    super(game, "Primal Plasma", "Planechase 2012", "PC2");
  }
}

module.exports = PrimalPlasma;
