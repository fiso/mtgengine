"use strict";
const Constants = require ("../../../Constants");
const WingShardsBase = require("../setIMA/WingShards");

class WingShards extends WingShardsBase {
  constructor (game) {
    super(game, "Wing Shards", "World Championship Decks 2004", "WC04");
  }
}

module.exports = WingShards;
