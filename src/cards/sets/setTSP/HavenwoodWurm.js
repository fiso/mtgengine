"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HavenwoodWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Havenwood Wurm", "Time Spiral", "TSP");
  }
}

module.exports = HavenwoodWurm;
