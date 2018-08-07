"use strict";
const Constants = require ("../../../Constants");
const WormHarvestBase = require("../setC18/WormHarvest");

class WormHarvest extends WormHarvestBase {
  constructor (game) {
    super(game, "Worm Harvest", "Eventide", "EVE");
  }
}

module.exports = WormHarvest;
