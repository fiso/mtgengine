"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SymbioticWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Symbiotic Wurm", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SymbioticWurm;
