"use strict";
const Constants = require ("../../../Constants");
const ShardlessAgentBase = require("../setPCA/ShardlessAgent");

class ShardlessAgent extends ShardlessAgentBase {
  constructor (game) {
    super(game, "Shardless Agent", "Judge Gift Cards 2015", "J15");
  }
}

module.exports = ShardlessAgent;
