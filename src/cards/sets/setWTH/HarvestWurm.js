"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarvestWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Harvest Wurm", "Weatherlight", "WTH");
  }
}

module.exports = HarvestWurm;
