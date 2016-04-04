"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuinationWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Ruination Wurm", "Gatecrash", "GTC");
  }
}

module.exports = RuinationWurm;
