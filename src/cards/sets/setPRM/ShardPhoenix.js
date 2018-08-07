"use strict";
const Constants = require ("../../../Constants");
const ShardPhoenixBase = require("../setTPR/ShardPhoenix");

class ShardPhoenix extends ShardPhoenixBase {
  constructor (game) {
    super(game, "Shard Phoenix", "Magic Online Promos", "PRM");
  }
}

module.exports = ShardPhoenix;
