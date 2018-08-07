"use strict";
const Constants = require ("../../../Constants");
const EarlyHarvestBase = require("../set9ED/EarlyHarvest");

class EarlyHarvest extends EarlyHarvestBase {
  constructor (game) {
    super(game, "Early Harvest", "Mirage", "MIR");
  }
}

module.exports = EarlyHarvest;
