"use strict";
const Constants = require ("../../../Constants");
const ShardPhoenixBase = require("../setTPR/ShardPhoenix");

class ShardPhoenix extends ShardPhoenixBase {
  constructor (game) {
    super(game, "Shard Phoenix", "Ninth Edition", "9ED");
  }
}

module.exports = ShardPhoenix;
