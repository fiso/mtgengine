"use strict";
const Constants = require ("../../../Constants");
const BountifulHarvestBase = require("../setM13/BountifulHarvest");

class BountifulHarvest extends BountifulHarvestBase {
  constructor (game) {
    super(game, "Bountiful Harvest", "Magic 2010", "M10");
  }
}

module.exports = BountifulHarvest;
