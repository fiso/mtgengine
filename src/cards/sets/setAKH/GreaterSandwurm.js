"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterSandwurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Greater Sandwurm", "Amonkhet", "AKH");
  }
}

module.exports = GreaterSandwurm;
