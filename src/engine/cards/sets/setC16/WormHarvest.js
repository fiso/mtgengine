"use strict";
const Constants = require ("../../../Constants");
const WormHarvestBase = require("../setC18/WormHarvest");

class WormHarvest extends WormHarvestBase {
  constructor (game) {
    super(game, "Worm Harvest", "Commander 2016", "C16");
  }
}

module.exports = WormHarvest;
