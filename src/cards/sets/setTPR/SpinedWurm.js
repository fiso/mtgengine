"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinedWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Spined Wurm", "Tempest Remastered", "TPR");
  }
}

module.exports = SpinedWurm;
