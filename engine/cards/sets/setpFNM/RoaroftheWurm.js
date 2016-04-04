"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoaroftheWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Roar of the Wurm", "Friday Night Magic", "pFNM");
  }
}

module.exports = RoaroftheWurm;
