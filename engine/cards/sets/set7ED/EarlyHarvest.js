"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EarlyHarvestBase = require("../set6ED/EarlyHarvest.js");

class EarlyHarvest extends EarlyHarvestBase {
  constructor(game) {
    super(game, "Early Harvest", "Seventh Edition", "7ED");
  }
}

module.exports = EarlyHarvest;
