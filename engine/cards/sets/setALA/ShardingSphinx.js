"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShardingSphinxBase = require("../setC13/ShardingSphinx.js");

class ShardingSphinx extends ShardingSphinxBase {
  constructor(game) {
    super(game, "Sharding Sphinx", "Shards of Alara", "ALA");
  }
}

module.exports = ShardingSphinx;
