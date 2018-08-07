"use strict";
const Constants = require ("../../../Constants");
const GrimHarvestBase = require("../setTD0/GrimHarvest");

class GrimHarvest extends GrimHarvestBase {
  constructor (game) {
    super(game, "Grim Harvest", "Coldsnap", "CSP");
  }
}

module.exports = GrimHarvest;
