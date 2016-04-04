"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrystalShard extends Card {
  constructor(game) {
    super(game, "Crystal Shard", "Mirrodin", "MRD");
  }
}

module.exports = CrystalShard;
