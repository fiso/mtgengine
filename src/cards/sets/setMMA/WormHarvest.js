"use strict";
const Constants = require ("../../../Constants");
const WormHarvestBase = require("../setEVE/WormHarvest");

class WormHarvest extends WormHarvestBase {
  constructor (game) {
    super(game, "Worm Harvest", "Modern Masters", "MMA");
  }
}

module.exports = WormHarvest;
