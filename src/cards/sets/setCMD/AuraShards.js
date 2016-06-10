"use strict";
const Constants = require ("../../../Constants");
const AuraShardsBase = require("../setINV/AuraShards");

class AuraShards extends AuraShardsBase {
  constructor (game) {
    super(game, "Aura Shards", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AuraShards;
