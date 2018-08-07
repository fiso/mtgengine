"use strict";
const Constants = require ("../../../Constants");
const WingShardsBase = require("../setIMA/WingShards");

class WingShards extends WingShardsBase {
  constructor (game) {
    super(game, "Wing Shards", "Friday Night Magic 2007", "F07");
  }
}

module.exports = WingShards;
