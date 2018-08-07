"use strict";
const Constants = require ("../../../Constants");
const HarvestSeasonBase = require("../setAKH/HarvestSeason");

class HarvestSeason extends HarvestSeasonBase {
  constructor (game) {
    super(game, "Harvest Season", "Amonkhet Promos", "PAKH");
  }
}

module.exports = HarvestSeason;
