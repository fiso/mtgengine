"use strict";
const Constants = require ("../../../Constants");
const ShardPhoenixBase = require("../setTPR/ShardPhoenix");

class ShardPhoenix extends ShardPhoenixBase {
  constructor (game) {
    super(game, "Shard Phoenix", "Junior Series Europe", "PJSE");
  }
}

module.exports = ShardPhoenix;
