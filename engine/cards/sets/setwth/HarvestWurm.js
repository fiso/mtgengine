"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarvestWurm extends Card {
  constructor(game) {
    super(game, "Harvest Wurm", "Weatherlight", "WTH");
  }
}

module.exports = HarvestWurm;
