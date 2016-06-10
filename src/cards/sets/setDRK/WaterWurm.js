"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaterWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Water Wurm", "The Dark", "DRK");
  }
}

module.exports = WaterWurm;
