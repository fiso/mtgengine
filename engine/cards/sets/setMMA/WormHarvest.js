"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WormHarvestBase = require("../setEVE/WormHarvest.js");

class WormHarvest extends WormHarvestBase {
  constructor(game) {
    super(game, "Worm Harvest", "Modern Masters", "MMA");
  }
}

module.exports = WormHarvest;
