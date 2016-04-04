"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShardlessAgent extends UnimplementedCard {
  constructor(game) {
    super(game, "Shardless Agent", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ShardlessAgent;
