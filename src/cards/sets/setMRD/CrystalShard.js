"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystalShard extends UnimplementedCard {
  constructor (game) {
    super(game, "Crystal Shard", "Mirrodin", "MRD");
  }
}

module.exports = CrystalShard;
