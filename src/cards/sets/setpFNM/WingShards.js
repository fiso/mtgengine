"use strict";
const Constants = require ("../../../Constants");
const WingShardsBase = require("../setC14/WingShards");

class WingShards extends WingShardsBase {
  constructor(game) {
    super(game, "Wing Shards", "Friday Night Magic", "pFNM");
  }
}

module.exports = WingShards;
