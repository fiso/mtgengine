"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WeirdHarvestBase = require("../set9ED/WeirdHarvest.js");

class WeirdHarvest extends WeirdHarvestBase {
  constructor(game) {
    super(game, "Weird Harvest", "Onslaught", "ONS");
  }
}

module.exports = WeirdHarvest;
