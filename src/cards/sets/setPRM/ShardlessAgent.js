"use strict";
const Constants = require ("../../../Constants");
const ShardlessAgentBase = require("../setPCA/ShardlessAgent");

class ShardlessAgent extends ShardlessAgentBase {
  constructor (game) {
    super(game, "Shardless Agent", "Magic Online Promos", "PRM");
  }
}

module.exports = ShardlessAgent;
