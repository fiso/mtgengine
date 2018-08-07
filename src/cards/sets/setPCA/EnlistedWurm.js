"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnlistedWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Enlisted Wurm", "Planechase Anthology", "PCA");
  }
}

module.exports = EnlistedWurm;
