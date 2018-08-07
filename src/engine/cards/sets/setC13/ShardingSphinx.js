"use strict";
const Constants = require ("../../../Constants");
const ShardingSphinxBase = require("../setC18/ShardingSphinx");

class ShardingSphinx extends ShardingSphinxBase {
  constructor (game) {
    super(game, "Sharding Sphinx", "Commander 2013", "C13");
  }
}

module.exports = ShardingSphinx;
