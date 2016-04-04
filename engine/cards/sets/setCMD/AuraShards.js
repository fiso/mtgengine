"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AuraShardsBase = require("../setINV/AuraShards.js");

class AuraShards extends AuraShardsBase {
  constructor(game) {
    super(game, "Aura Shards", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AuraShards;
