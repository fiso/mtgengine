"use strict";
const Constants = require ("../../../Constants");
const HarvestWurmBase = require("../setWC97/HarvestWurm");

class HarvestWurm extends HarvestWurmBase {
  constructor (game) {
    super(game, "Harvest Wurm", "Weatherlight", "WTH");
  }
}

module.exports = HarvestWurm;
