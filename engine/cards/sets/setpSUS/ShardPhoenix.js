"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShardPhoenixBase = require("../set9ED/ShardPhoenix.js");

class ShardPhoenix extends ShardPhoenixBase {
  constructor(game) {
    super(game, "Shard Phoenix", "Super Series", "pSUS");
  }
}

module.exports = ShardPhoenix;
