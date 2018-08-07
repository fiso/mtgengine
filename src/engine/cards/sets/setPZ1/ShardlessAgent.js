"use strict";
const Constants = require ("../../../Constants");
const ShardlessAgentBase = require("../setPCA/ShardlessAgent");

class ShardlessAgent extends ShardlessAgentBase {
  constructor (game) {
    super(game, "Shardless Agent", "Legendary Cube", "PZ1");
  }
}

module.exports = ShardlessAgent;
