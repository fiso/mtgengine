"use strict";
const Constants = require ("../../../Constants");
const AuraShardsBase = require("../setCMD/AuraShards");

class AuraShards extends AuraShardsBase {
  constructor (game) {
    super(game, "Aura Shards", "Invasion", "INV");
  }
}

module.exports = AuraShards;
