"use strict";
const Constants = require ("../../../Constants");
const ShardingSphinxBase = require("../setC13/ShardingSphinx");

class ShardingSphinx extends ShardingSphinxBase {
  constructor (game) {
    super(game, "Sharding Sphinx", "Shards of Alara", "ALA");
  }
}

module.exports = ShardingSphinx;
