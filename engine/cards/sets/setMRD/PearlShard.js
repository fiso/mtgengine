"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PearlShard extends Card {
  constructor(game) {
    super(game, "Pearl Shard", "Mirrodin", "MRD");
  }
}

module.exports = PearlShard;
