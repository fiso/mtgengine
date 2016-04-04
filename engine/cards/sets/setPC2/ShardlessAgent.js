"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShardlessAgent extends Card {
  constructor(game) {
    super(game, "Shardless Agent", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ShardlessAgent;
