"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EarlyHarvestBase = require("../set6ED/EarlyHarvest.js");

class EarlyHarvest extends EarlyHarvestBase {
  constructor(game) {
    super(game, "Early Harvest", "Ninth Edition", "9ED");
  }
}

module.exports = EarlyHarvest;
