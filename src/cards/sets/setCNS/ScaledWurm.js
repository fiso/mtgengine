"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScaledWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Scaled Wurm", "Conspiracy", "CNS");
  }
}

module.exports = ScaledWurm;
