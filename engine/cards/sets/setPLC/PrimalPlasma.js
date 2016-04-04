"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimalPlasmaBase = require("../setDDI/PrimalPlasma.js");

class PrimalPlasma extends PrimalPlasmaBase {
  constructor(game) {
    super(game, "Primal Plasma", "Planar Chaos", "PLC");
  }
}

module.exports = PrimalPlasma;
