"use strict";
const Constants = require ("../../../Constants");
const WingShardsBase = require("../setIMA/WingShards");

class WingShards extends WingShardsBase {
  constructor (game) {
    super(game, "Wing Shards", "Scourge", "SCG");
  }
}

module.exports = WingShards;
