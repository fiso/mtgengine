"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArrogantWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Arrogant Wurm", "Vintage Masters", "VMA");
  }
}

module.exports = ArrogantWurm;
