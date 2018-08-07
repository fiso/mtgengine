"use strict";
const Constants = require ("../../../Constants");
const PrimalPlasmaBase = require("../setPCA/PrimalPlasma");

class PrimalPlasma extends PrimalPlasmaBase {
  constructor (game) {
    super(game, "Primal Plasma", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = PrimalPlasma;
