"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FallowWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Fallow Wurm", "Weatherlight", "WTH");
  }
}

module.exports = FallowWurm;
