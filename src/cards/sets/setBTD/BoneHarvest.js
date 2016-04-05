"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoneHarvest extends UnimplementedCard {
  constructor(game) {
    super(game, "Bone Harvest", "Beatdown Box Set", "BTD");
  }
}

module.exports = BoneHarvest;
