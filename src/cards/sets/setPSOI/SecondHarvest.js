"use strict";
const Constants = require ("../../../Constants");
const SecondHarvestBase = require("../setSOI/SecondHarvest");

class SecondHarvest extends SecondHarvestBase {
  constructor (game) {
    super(game, "Second Harvest", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = SecondHarvest;
