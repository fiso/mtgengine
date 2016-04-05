"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GorgerWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Gorger Wurm", "Alara Reborn", "ARB");
  }
}

module.exports = GorgerWurm;
