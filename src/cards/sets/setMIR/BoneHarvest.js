"use strict";
const Constants = require ("../../../Constants");
const BoneHarvestBase = require("../setBTD/BoneHarvest");

class BoneHarvest extends BoneHarvestBase {
  constructor(game) {
    super(game, "Bone Harvest", "Mirage", "MIR");
  }
}

module.exports = BoneHarvest;
