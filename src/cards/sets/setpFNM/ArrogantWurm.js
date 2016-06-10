"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArrogantWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Arrogant Wurm", "Friday Night Magic", "pFNM");
  }
}

module.exports = ArrogantWurm;
