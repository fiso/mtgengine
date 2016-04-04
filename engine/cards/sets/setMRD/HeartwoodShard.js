"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeartwoodShard extends Card {
  constructor(game) {
    super(game, "Heartwood Shard", "Mirrodin", "MRD");
  }
}

module.exports = HeartwoodShard;
