"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartwoodShard extends UnimplementedCard {
  constructor (game) {
    super(game, "Heartwood Shard", "Mirrodin", "MRD");
  }
}

module.exports = HeartwoodShard;
