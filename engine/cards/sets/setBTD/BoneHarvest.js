"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoneHarvest extends Card {
  constructor(game) {
    super(game, "Bone Harvest", "Beatdown Box Set", "BTD");
  }
}

module.exports = BoneHarvest;
