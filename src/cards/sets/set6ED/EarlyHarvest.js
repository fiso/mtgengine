"use strict";
const Constants = require ("../../../Constants");
const EarlyHarvestBase = require("../set9ED/EarlyHarvest");

class EarlyHarvest extends EarlyHarvestBase {
  constructor (game) {
    super(game, "Early Harvest", "Classic Sixth Edition", "6ED");
  }
}

module.exports = EarlyHarvest;
