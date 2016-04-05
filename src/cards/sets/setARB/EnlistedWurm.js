"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnlistedWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Enlisted Wurm", "Alara Reborn", "ARB");
  }
}

module.exports = EnlistedWurm;
