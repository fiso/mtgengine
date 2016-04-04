"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaterWurm extends Card {
  constructor(game) {
    super(game, "Water Wurm", "The Dark", "DRK");
  }
}

module.exports = WaterWurm;
