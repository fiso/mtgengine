"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoneHarvestBase = require("../setBTD/BoneHarvest.js");

class BoneHarvest extends BoneHarvestBase {
  constructor(game) {
    super(game, "Bone Harvest", "Mirage", "MIR");
  }
}

module.exports = BoneHarvest;
