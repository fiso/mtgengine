"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarpingWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Warping Wurm", "Mirage", "MIR");
  }
}

module.exports = WarpingWurm;
