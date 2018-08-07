"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElderLandWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Elder Land Wurm", "Masters Edition", "MED");
  }
}

module.exports = ElderLandWurm;
