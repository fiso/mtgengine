"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PearlShard extends UnimplementedCard {
  constructor (game) {
    super(game, "Pearl Shard", "Mirrodin", "MRD");
  }
}

module.exports = PearlShard;
