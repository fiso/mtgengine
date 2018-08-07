"use strict";
const Constants = require ("../../../Constants");
const PrimalPlasmaBase = require("../setPCA/PrimalPlasma");

class PrimalPlasma extends PrimalPlasmaBase {
  constructor (game) {
    super(game, "Primal Plasma", "Planar Chaos", "PLC");
  }
}

module.exports = PrimalPlasma;
