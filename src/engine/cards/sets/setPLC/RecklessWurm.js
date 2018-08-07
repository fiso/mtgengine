"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Wurm", "Planar Chaos", "PLC");
  }
}

module.exports = RecklessWurm;
