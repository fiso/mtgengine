"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmadaWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Armada Wurm", "Return to Ravnica", "RTR");
  }
}

module.exports = ArmadaWurm;
