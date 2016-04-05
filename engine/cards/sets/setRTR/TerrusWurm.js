"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerrusWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Terrus Wurm", "Return to Ravnica", "RTR");
  }
}

module.exports = TerrusWurm;
