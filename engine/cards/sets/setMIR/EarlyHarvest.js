"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EarlyHarvestBase = require("../set6ED/EarlyHarvest.js");

class EarlyHarvest extends EarlyHarvestBase {
  constructor(game) {
    super(game, "Early Harvest", "Mirage", "MIR");
  }
}

module.exports = EarlyHarvest;
