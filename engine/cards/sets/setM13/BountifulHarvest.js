"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BountifulHarvestBase = require("../setM10/BountifulHarvest.js");

class BountifulHarvest extends BountifulHarvestBase {
  constructor(game) {
    super(game, "Bountiful Harvest", "Magic 2013", "M13");
  }
}

module.exports = BountifulHarvest;
