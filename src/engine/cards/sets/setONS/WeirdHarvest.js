"use strict";
const Constants = require ("../../../Constants");
const WeirdHarvestBase = require("../set9ED/WeirdHarvest");

class WeirdHarvest extends WeirdHarvestBase {
  constructor (game) {
    super(game, "Weird Harvest", "Onslaught", "ONS");
  }
}

module.exports = WeirdHarvest;
