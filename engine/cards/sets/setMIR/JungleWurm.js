"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JungleWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Jungle Wurm", "Mirage", "MIR");
  }
}

module.exports = JungleWurm;
