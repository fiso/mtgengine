"use strict";
const Constants = require ("../../../Constants");
const PrimalPlasmaBase = require("../setDDI/PrimalPlasma");

class PrimalPlasma extends PrimalPlasmaBase {
  constructor(game) {
    super(game, "Primal Plasma", "Planar Chaos", "PLC");
  }
}

module.exports = PrimalPlasma;
