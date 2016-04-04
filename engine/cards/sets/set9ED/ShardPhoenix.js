"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShardPhoenix extends Card {
  constructor(game) {
    super(game, "Shard Phoenix", "Ninth Edition", "9ED");
  }
}

module.exports = ShardPhoenix;
