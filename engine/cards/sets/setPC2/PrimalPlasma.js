"use strict";
const Constants = require ("../../../Constants");
const PrimalPlasmaBase = require("../setDDI/PrimalPlasma");

class PrimalPlasma extends PrimalPlasmaBase {
  constructor(game) {
    super(game, "Primal Plasma", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = PrimalPlasma;
