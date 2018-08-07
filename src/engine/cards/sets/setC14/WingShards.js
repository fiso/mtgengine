"use strict";
const Constants = require ("../../../Constants");
const WingShardsBase = require("../setIMA/WingShards");

class WingShards extends WingShardsBase {
  constructor (game) {
    super(game, "Wing Shards", "Commander 2014", "C14");
  }
}

module.exports = WingShards;
