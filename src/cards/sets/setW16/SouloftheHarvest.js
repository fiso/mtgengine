"use strict";
const Constants = require ("../../../Constants");
const SouloftheHarvestBase = require("../setAVR/SouloftheHarvest");

class SouloftheHarvest extends SouloftheHarvestBase {
  constructor (game) {
    super(game, "Soul of the Harvest", "Welcome Deck 2016", "W16");
  }
}

module.exports = SouloftheHarvest;
