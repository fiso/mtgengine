"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SouloftheHarvestBase = require("../setAVR/SouloftheHarvest.js");

class SouloftheHarvest extends SouloftheHarvestBase {
  constructor(game) {
    super(game, "Soul of the Harvest", "Commander 2014", "C14");
  }
}

module.exports = SouloftheHarvest;
