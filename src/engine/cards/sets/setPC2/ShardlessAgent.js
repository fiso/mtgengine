"use strict";
const Constants = require ("../../../Constants");
const ShardlessAgentBase = require("../setPCA/ShardlessAgent");

class ShardlessAgent extends ShardlessAgentBase {
  constructor (game) {
    super(game, "Shardless Agent", "Planechase 2012", "PC2");
  }
}

module.exports = ShardlessAgent;
