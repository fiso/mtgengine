"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimalPlasmaBase = require("../setDDI/PrimalPlasma.js");

class PrimalPlasma extends PrimalPlasmaBase {
  constructor(game) {
    super(game, "Primal Plasma", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = PrimalPlasma;
