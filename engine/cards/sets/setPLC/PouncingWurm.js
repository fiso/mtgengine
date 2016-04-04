"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PouncingWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Pouncing Wurm", "Planar Chaos", "PLC");
  }
}

module.exports = PouncingWurm;
