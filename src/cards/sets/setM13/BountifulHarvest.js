"use strict";
const Constants = require ("../../../Constants");
const BountifulHarvestBase = require("../setM10/BountifulHarvest");

class BountifulHarvest extends BountifulHarvestBase {
  constructor (game) {
    super(game, "Bountiful Harvest", "Magic 2013", "M13");
  }
}

module.exports = BountifulHarvest;
