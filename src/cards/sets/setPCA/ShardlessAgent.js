"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShardlessAgent extends UnimplementedCard {
  constructor (game) {
    super(game, "Shardless Agent", "Planechase Anthology", "PCA");
  }
}

module.exports = ShardlessAgent;
